import { Pokemon } from "../../types/pokemon";
import { About, Moves, Stats } from "./sections";

export enum SECTIONS {
  ABOUT = "About",
  STATS = "Stats",
  MOVES = "Moves",
}

interface SectionHandlerI {
  selected: SECTIONS,
  pokemon: Pokemon,
}

export function SectionHandler({ selected, pokemon }: SectionHandlerI) {
  switch (selected) {
      case SECTIONS.ABOUT:
          return <About pokemon={pokemon}/>
          // break;
  
      case SECTIONS.MOVES:
          return <Moves abilities={pokemon.abilities} moves={pokemon.moves}/>
          // break;
  
      case SECTIONS.STATS:
          return <Stats pokemon={pokemon}/>
          // break;
          
      default:
          break;
  }
}