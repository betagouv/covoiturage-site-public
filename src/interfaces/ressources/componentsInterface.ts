import { CategorieProps } from "../actualites/componentsInterface";

 export interface RessourceCardProps {
  title: string,
  desc: string,
  date: string,
  img: string,
  alt?: string,
  link: string,
  themes: CategorieProps[],
  categories: CategorieProps[],
  horizontal?: boolean
}