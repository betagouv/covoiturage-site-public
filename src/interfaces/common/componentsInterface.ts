import { Button } from "../cms/collectionsInterface";

export interface ShareProps {
  name:string, 
  icon:string, 
  href:string,
}

export interface CTAProps {
  title: string,
  subtitle?:string,
  content: string,
  backgroundColor?: string,
  img?: string,
  alt?:string,
  buttons?: Button[],
}

export interface HighlightProps {
  title: string,
  content: string,
  img?: string,
  alt?: string,
  classes? : Partial<Record<"content" | "root", string>> | undefined,
  buttons?: Button[],
}

export interface MediaProps {
  title: string,
  content: string,
  position?: 'right' | 'left',
  img?: string,
  alt?: string,
  buttons?: Button[],
}