import { Card } from "@codegouvfr/react-dsfr/Card";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { ActuCardProps } from "@/interfaces/actualites/componentsInterface";

export default function ActuCard(props: ActuCardProps) {
  return(
    <Card
      title={props.title}
      desc={props.content}
      detail={`Publié le ${props.date}`}
      imageAlt={props.img_legend}
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
                href: props.href,
              },
            },
          ]}
        />
      }
      horizontal={props.horizontal}
    />
  )
}