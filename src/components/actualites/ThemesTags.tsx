'use client'
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { CategorieProps } from "@/interfaces/actualites/componentsInterface";
import { fr } from "@codegouvfr/react-dsfr";
import { useState } from "react";

export default function ThemesTags(props: {themes: CategorieProps[]}) {
  const [activeThemes, setActiveThemes] = useState<number[]>([]);
  const onClickTag = (t:number) => {
    activeThemes.find(a => a === t) ?  setActiveThemes(themes => themes.splice(t)) : setActiveThemes(themes => [...themes, t])
  };
  return (
    <ul className={fr.cx('fr-tags-group')}>
      {props.themes &&
        props.themes.map((t) => {
          return (
            <li key={t.id}>
              <Tag
                nativeButtonProps={{
                  onClick: () => {onClickTag(t.id)}
                }}
                pressed={activeThemes.find(a => a === t.id) ? true : false}
              >
                {t.name}
              </Tag>
            </li>
          )
        })
      }
    </ul>
  )
}