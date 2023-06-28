import { ButtonProps } from "@codegouvfr/react-dsfr/Button";

export interface ShareProps {
  name:string, 
  icon:string, 
  href:string,
}

export interface HighlightProps {
  title: string,
  text: string,
  img?: string,
  alt?: string,
  classes? : Partial<Record<"content" | "root", string>> | undefined,
  buttons?: [ButtonProps, ...ButtonProps[]],
}

export interface MediaProps {
  title: string,
  text: string,
  position: 'right' | 'left',
  img: string,
  alt: string,
  buttons?: [ButtonProps, ...ButtonProps[]],
}