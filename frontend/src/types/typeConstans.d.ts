export type TypeNavItems = {
  link: string;
  path: string;
}

export type TypeFilter = {
  filter: string;
  path: string;
}

export type TypeBanner = {
  id: number;
  img: string;
}

export type TypeCategories = {
  id: number;
  category: string;
  description: string;
}

export type TypeDiets = {
  id: number;
  diet: string;
}

export type TypeDishes = {
  id: number;
  dish: string;
}

export type TypeBlogPosts = {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  url: string;
  date: string;
  content?:string[];
}
