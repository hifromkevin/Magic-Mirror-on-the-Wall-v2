export interface INewsError {
  code: string;
  message: string;
  status: string;
}

export interface INewsArticle {
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

export interface IArticle {
  title: string | null;
  author?: string | null;
}

export type TNewsResponse = INewsArticle[];
