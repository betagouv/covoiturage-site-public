import PageTitle from '@/components/common/PageTitle';
import SectionTitle from '@/components/common/SectionTitle';
import Definition from './definition';
import IndicatorsRow from '@/components/observatoire/indicators/IndicatorsRow';

export default function Page() {
  const content = {
    pageTitle: 'Comprendre la pratique du covoiturage en France',
    sections: [
      {
        title:'Environ 900 000 trajets covoiturés chaque jour',
        rows: [
          {
            indicators: [
              { value: '59%', title: 'des déplacements en voiture sont réalisés à plusieurs' },
              { value: '1,43', title: 'personnes par véhicule sur des distances inférieur à 100 km' },
            ],
            analyse: {
              title: 'Analyse',
              content: `En 2019, 59 % des déplacements en voiture sont effectués à plusieurs. Le covoiturage reste en revanche
              une pratique peu développée puisque seuls 3 % des passagers déclarent avoir covoituré pour leurs
              déplacements en voiture. L’usage individuel du véhicule, désigné par le terme d’« autosolisme » est
              majoritaire pour les déplacements en voiture de moins de 50 km.`,
            },
          }
        ]
      },
      {
        title:'Répartition des pratiques du covoiturage :',
        rows: [
          {
            indicators: [
              { value: '95%', title: 'de la pratique se fait de façon informelle' },
            ],
            analyse: {
              title: 'Covoiturage informel',
              content: `C'est la forme de covoiturage la plus répendue, Elle s’effectue en famille, avec ses collègues de travail ou ses amis. 
              Elle est la plupart du temps gratuite pour le passager. Il est difficile de l'étudier car il est nécessaire de mettre en place 
              des enquêtes lourdes et coûteuse afin d'analyser sa pratique par les français.`,
            },
          },
          {
            indicators: [
              { value: '5%', title: 'de la pratique utilise une plateforme numérique dédiée' },
            ],
            analyse: {
              title: 'Covoiturage utilisant une plateforme numérique dédiée',
              content: `Cette forme de covoiturage est plus facile à étudier depuis la mise en place du registre de preuve de covoiturage qui collecte 
              depuis 2020 tous les trajets effectués via les opérateurs de covoiturage. Même si les indicateurs produits ne reflètent qu’une petite partie
              de la pratique, ils permettent de suivre plus régulièrement les tendances et peuvent mettre en évidence certains phénomènes très fin sur 
              les territoires.`,
              link: {
                title:'En savoir plus',
                url:'#',
              }
            },
          }
        ]
      },
    ]
  }

  return (
    <article id='content'>
      <PageTitle title={content.pageTitle} />
      <Definition />
      {content.sections.map( (d, i) => {
        return (
          <>
            <SectionTitle key={i} title={d.title} />
            {d.rows.map((r,index) => {
              return <IndicatorsRow key={index} indicators={r.indicators} analyse={r.analyse} />
            })}
          </>
        )
      })}
      
    </article>
  );
}
