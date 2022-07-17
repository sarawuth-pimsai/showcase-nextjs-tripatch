export interface Category {
  hashId: string;
  thaiName: string;
  englishName: string;
  name: string;
  searchUrl: string;
}
export interface SpacialCategories extends Array<Category> {}
export interface SubCategories extends Array<Category> {}
