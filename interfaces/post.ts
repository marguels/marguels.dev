export interface PostContent {
    [x: string]: any;
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    contentHtml: string;
    toc: TocItem[];
    obsidianLinks: ObsidianLinks;
    sidebar: boolean;
  }

export interface PostMetadata {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    tags: string[];
    sidebar: boolean;
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
    parent?: boolean;
    title?: string;
  }
  
  export interface LinkObject {
    source: string;
    target: string;
  }