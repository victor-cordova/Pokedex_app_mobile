import { Pokemon, PokemonDB } from "../types/pokemon";

export const parseData = (data: PokemonDB): Pokemon => {
  return {
    abilities: JSON.parse(data.abilities),
    color: data.color,
    height: data.height,
    id: data.id,
    moves: JSON.parse(data.moves),
    name: data.name,
    sprites: JSON.parse(data.sprite),
    stats: JSON.parse(data.stats),
    types: JSON.parse(data.types),
    weight: data.weight,
  };
}