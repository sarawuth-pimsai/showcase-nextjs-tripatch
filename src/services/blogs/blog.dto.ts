interface BlogRendered {
  rendered: string;
  protected?: boolean;
}
export interface BlogItem {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: BlogRendered;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: "post";
  link: string;
  title: BlogRendered;
  content: BlogRendered;
  excerpt: BlogRendered;
  author: number;
  featured_media: number;
  comment_status: "open";
  ping_status: "open";
  sticky: boolean;
  template: string;
  meta: any[];
  categories: number[];
  tags: number[];
}
export interface BlogResponse {}
