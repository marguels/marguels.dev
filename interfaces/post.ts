export interface PostContent {
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    contentHtml: string;
    toc: TocItem[];
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