 export interface RessourceCardProps {
  title: string,
  content: string,
  date: string,
  img: string,
  img_legend?: string,
  href: string,
  categories: {
    Categories_id:CategorieProps
  }[]
  horizontal?: boolean
}

export interface CategorieProps {
  id: string | number,
  name: string,
  slug: string,
}