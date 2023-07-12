import { ID } from "@directus/sdk"

export type Collections = {
  articles: Article,
  ressources: Ressource,
  categories: Category,
  pages: Page,
  hero: Hero,
  highlight: Highlight,
  list: List,
}

export interface Ressource {
  id:ID,
  slug:string,
  title:string,
  content?:string,
  categories:Category[],
  img?:string,
  img_legend?:string,
  file:string,
  status:string,
  date_created: Date,
  date_updated: Date,
  user_created: Date,
}

export interface Category {
  id:ID,
  slug:string,
  name:string,
  date_created: Date,
  date_updated: Date,
}

export interface Article {
  id:ID,
  slug:string,
  title:string,
  content?:string,
  img?:string,
  img_legend?:string,
  status:string,
  date_created: Date,
  date_updated: Date,
  user_created: Date,
}

export interface Page {
  id:ID,
  slug:string,
  title:string,
  content?:string,
  img?:string,
  img_legend?:string,
  status:string,
  sections?:Section[]
}

export interface Section {
  collection:string,
  item: Hero | List
}

export interface Hero {
  id:ID,
  title:string,
  subtitle:string,
  content?:string,
  img?:string,
  alt?:string,
  background_color?:string,
  buttons:Button[]
}

export interface Highlight {
  id:ID,
  title:string,
  content?:string,
  img?:string,
  alt?:string,
  buttons:Button[]
}

export interface List {
  id:ID,
  title:string,
  highlights:Highlight[]
}

export interface Button {
  title: string,
  url: string,
  icon?: string,
  color?:'primary' | 'secondary',
}