export interface PostContent {
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    contentHtml: string;
    toc: TocItem[];
    obsidianLinks: ObsidianLinks;
  }

export interface PostMetadata {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
}

export interface TocItem {
    id: string;
    text: string;
    depth: number;
  }

  export interface ObsidianLinks {
    nodes: NodeObject[];
    links: LinkObject[];
  }

  export interface NodeObject {
    id: string;
    name: string;
  }
  
  export interface LinkObject {
    source: string;
    target: string;
  }