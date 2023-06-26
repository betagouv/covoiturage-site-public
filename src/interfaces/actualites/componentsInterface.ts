export interface CategorieProps {
  id: number,
  name: string,
  link: string,
 }

 export interface ActuCardProps {
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