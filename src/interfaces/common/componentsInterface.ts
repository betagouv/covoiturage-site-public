
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
  buttons?: ButtonProps[],
}

export interface HighlightProps {
  title: string,
  content: string,
  img?: string,
  alt?: string,
  classes? : Partial<Record<"content" | "root", string>> | undefined,
  buttons?: ButtonProps[],
}

export interface ButtonProps {
  title: string,
  url: string,
  icon?: string,
  color?:'primary' | 'secondary',
}

export interface MediaProps {
  title: string,
  content: string,
  position?: 'right' | 'left',
  img?: string,
  alt?: string,
  buttons?: ButtonProps[],
}