export interface TableOfContents {
    id: string;
    text: string;
    depth: number;
}

export interface PostContent {
    slug: string;
    date: string;
    title: string;
    contentHtml: string;
    toc: TableOfContents[];
  }