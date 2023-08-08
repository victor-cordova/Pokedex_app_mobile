import { AboutSection, MovesSection, StatsSection } from "./sections";
import { Pokemon } from "../../types/pokemon";

export enum SECTIONS {
  ABOUT = "About",
  STATS = "Stats",
  MOVES = "Moves",
}

interface SectionHandlerI {
  selected: SECTIONS,
  data: Pokemon,
}

export function SectionHandler({ selected, data }: SectionHandlerI) {
	switch (selected) {
		case SECTIONS.ABOUT:
			return <AboutSection pokemon={data}/>
		case SECTIONS.MOVES:
			return <MovesSection abilities={data.abilities} moves={data.moves}/>
		case SECTIONS.STATS:
			return <StatsSection pokemon={data}/>
		default:
			break;
  }
}