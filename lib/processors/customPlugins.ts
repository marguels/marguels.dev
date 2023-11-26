import { Plugin, Transformer } from "unified";
import { Element, Root } from "hast";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";
import { Node, Literal, Parent } from "unist";
import {
  LinkObject,
  NodeObject,
  ObsidianLinks,
  TocItem,
} from "@/interfaces/post";
import { Link } from "mdast";
import slugify from "slugify";
import { getPostMetadataBySlug } from "../posts";

const BRACKET_LINK_REGEX =
  /\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)#?([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)?\|?([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)?\]\]/g;

export const addClassToImages: Plugin = (): Transformer => {
  return (tree: Node): Node => {
    visit(tree, "element", (node: Node) => {
      if (isElement(node) && node.tagName === "img") {
        node.properties.className = ["post-image"];
      }
    });
    return tree;
  };
};

export const remarkObsidianLinks: Plugin = (): Transformer => {
  return (tree: Node): Node => {
    visit(tree, "text", (node: Node, index: number, parent: Node) => {
      if (node.type === "text") {
        const textNode = node as Literal;
        const value = textNode.value as string;
        const matches = Array.from(value.matchAll(BRACKET_LINK_REGEX));
        if (matches.length > 0) {
          matches.forEach((match) => {
            const start = value.indexOf(match[0]);
            const end = start + match[0].length;
            const beforeLink = value.toString().substring(0, start);
            const afterLink = value.toString().substring(end);
            const baseLink = slugify(match[1], { lower: true });
            const link = match[2]
              ? `${baseLink}#${slugify(match[1], { lower: true })}`
              : baseLink;
            const text = match[3] || match[1];
            const newNodes: Node[] = [
              { type: "text", value: beforeLink } as Literal,
              {
                type: "link",
                url: link,
                data: {
                  hProperties: {
                    class: "obsidian-link",
                  },
                },
                children: [{ type: "text", value: text }],
              } as Link,
              { type: "text", value: afterLink } as Literal,
            ];
            if (parent && parent.type === "paragraph") {
              (parent as Parent).children.splice(index, 1, ...newNodes);
            }
          });
        }
      }
    });
    return tree;
  };
};

function isElement(node: Node): node is Element {
  return "tagName" in node && "properties" in node;
}

export const getToc = (tree: Root): TocItem[] => {
  return tree.children
    .filter(
      (node): node is Element =>
        node.type === "element" &&
        (node.tagName === "h1" ||
          node.tagName === "h2" ||
          node.tagName === "h3") &&
        node.properties.className !== "no-toc"
    )
    .map((node) => ({
      id: node.properties.id as string,
      text: toString(node),
      depth:
        node.tagName.charCodeAt(node.tagName.length - 1) - "1".charCodeAt(0),
    }));
};

function findObsidianLinks(tree: Root): any[] {
  const obsidianLinks: Element[] = [];

  visit(tree, "element", (node: Element) => {
    if (node.tagName === "p") {
      node.children.forEach((child) => {
        if (
          child.type === "element" &&
          typeof child.properties?.class === "string"
        ) {
          if (child.properties.class.includes("obsidian-link")) {
            obsidianLinks.push(child);
          }
        }
      });
    }
  });
  return obsidianLinks;
}

export const getObsidianGraphData = (
  slug: string,
  title: string,
  tree: Root
): ObsidianLinks => {
  const obsidianLinks = findObsidianLinks(tree);
  const nodes: NodeObject[] = obsidianLinks.map((link) => {
    
    const postMetadata = getPostMetadataBySlug(
      link.properties.href as string
    );
    return {
    id: link.properties.href as string,
    name: (link.children[0] as unknown as Literal).value as string,
    parent: false as boolean,
    title: postMetadata ? postMetadata.title : "",
  }});
  nodes.push({ id: slug, name: title.trim().replace("\n", ""), parent: true, title: title });

  const links: LinkObject[] = obsidianLinks
    .map((link) => ({
        source: slug,
        target: link.properties.href as string,
      }))
    .filter((link) => link !== undefined) as LinkObject[];

  const graphObject = { nodes, links };
  return graphObject;
};
