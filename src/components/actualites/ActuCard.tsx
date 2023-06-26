import { Card } from "@codegouvfr/react-dsfr/Card";
import { fr } from "@codegouvfr/react-dsfr";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { ActuCardProps } from "@/interfaces/actualites/componentsInterface";

export default function ActuCard(props: ActuCardProps) {
  return(
    <Card
      title={props.title}
      desc={props.desc}
      start={
        <ul className={fr.cx('fr-tags-group')}>
          {props.categories &&
            props.categories.map((c, i) => {
              return (
                <li key={i}>
                  <Tag
                    linkProps={{
                      href: c.link
                    }}
                  >
                    {c.name}
                  </Tag>
                </li>
              )
            })
          }
        </ul>
      }
      detail={`Publié le ${props.date}`}
      imageAlt={props.alt}
      imageUrl={props.img}
      footer={
        <ButtonsGroup
          alignment='right'
          buttonsEquisized
          buttons={[
            {
              children: 'Lire l\'actualité',
              iconId: "fr-icon-arrow-right-s-line",
              iconPosition: "right",
              linkProps: {
                href: props.link,
              },
            },
          ]}
        />
      }
      horizontal={props.horizontal}
    />
  )
}