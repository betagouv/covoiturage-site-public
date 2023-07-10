import { ID } from "@directus/sdk"

export type Collections = {
  articles: Article,
  ressources: Ressource,
  categories: Category,
}

export interface Ressource {
  id:ID,
  slug:string,
  title:string,
  content:string,
  categories:Category[],
  img:string,
  img_legend:string,
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
  content:string,
  img:string,
  img_legend:string,
  status:string,
  date_created: Date,
  date_updated: Date,
  user_created: Date,
}