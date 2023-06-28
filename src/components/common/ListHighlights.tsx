import Highlight from "./Highlight";
import { HighlightProps } from "@/interfaces/common/componentsInterface";

export default function ListHighlight(props:{ highlights: HighlightProps[]}) {
  return(
    <div id='list-highlight'>
      { props.highlights.map( (h, i) => 
        <Highlight 
          key={i}
          title={h.title}
          text={h.text}
          img={h.img}
          alt={h.alt}
          buttons={h.buttons}
          classes={h.classes}
        />
      )}
    </div>
  );
}