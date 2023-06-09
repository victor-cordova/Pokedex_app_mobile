export const API_HOST = "https://pokeapi.co/api/v2";

export const POKEMON_TYPE_COLORS: Record<string, string> = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#FFCE4B",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#FA6C6C",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#48CFB2",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#A8A878",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};

export const TYPE_COLORS: Record<string, string> = {
  bug: "#A8B820",
  dark: "#040706",
  dragon: "#378A94",
  electric: "#E0E64B",
  fairy: "#9E1A44",
  fighting: "#9F422A",
  fire: "#B22328",
  flying: "#90B1C5",
  ghost: "#363069",
  grass: "#48CFB2",
  ground: "#AD7235",
  ice: "#7ECFF2",
  normal: "#A8A878",
  poison: "#642785",
  psychic: "#AC296B",
  rock: "#4B190E",
  steel: "#5C756D",
  water: "#2648DC",
}

export enum STATS {
  "HP" = "HP", 
  "ATK" = "ATK", 
  "DEF" = "DEF", 
  "SPD" = "SPD", 
  "EXP" = "EXP",
  // "ss" = "SS",
}

export const STATS_COLORS: Record<STATS, string> = {
  HP: "#D53846",
  ATK: "#FEA623",
  DEF: "#0092EB",
  SPD: "#8CB1C2",
  EXP: "#378E3A"
}
// StatsI.

// STATS_COLORS[StatsV2.ATK];