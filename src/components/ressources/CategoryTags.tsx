'use client'
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { CategorieProps } from "@/interfaces/ressources/componentsInterface";
import { fr } from "@codegouvfr/react-dsfr";
import { useState } from "react";
import { ID } from "@directus/sdk";

export default function CategoryTags(props: {categories: CategorieProps[]}) {
  const [activeCategories, setActiveCategories] = useState<ID[]>([]);
  const onClickTag = (t:ID) => {
    activeCategories.find(a => a === t) ?  setActiveCategories(categories => categories.filter(c => c !== t)) : setActiveCategories(categories => [...categories, t])
  };
  return (
    <ul className={fr.cx('fr-tags-group')}>
      {props.categories &&
        props.categories.map((t) => {
          return (
            <li key={t.id}>
              <Tag
                nativeButtonProps={{
                  onClick: () => {onClickTag(t.id)}
                }}
                pressed={activeCategories.find(a => a === t.id) ? true : false}
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