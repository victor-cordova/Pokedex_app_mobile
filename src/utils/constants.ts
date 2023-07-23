export const API_HOST = "https://pokeapi.co/api/v2";
export const FAVORITE_IDS_KEY = "favorite-ids";

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
  bug: "rgba(164, 190, 123, 0.5)",
  dark: "rgba(51, 51, 51, 0.5)",
  dragon: "rgba(121, 186, 193, 0.5)",
  electric: "rgba(255, 251, 172, 0.5)",
  fairy: "rgba(237, 205, 187, 0.5)",
  fighting: "rgba(231, 133, 68, 0.5)",
  fire: "rgba(223, 78, 78, 0.5)",
  flying: "rgba(221, 221, 221, 0.5)",
  ghost: "rgba(79, 69, 87, 0.5)",
  grass: "rgba(195, 229, 174, 0.5)",
  ground: "rgba(194, 176, 146, 0.5)",
  ice: "rgba(182, 234, 250, 0.5)",
  normal: "rgba(243, 236, 184, 0.5)",
  poison: "rgba(190, 159, 225, 0.5)",
  psychic: "rgba(255, 175, 175, 0.5)",
  rock: "rgba(174, 107, 52, 0.5)",
  steel: "rgba(85, 85, 85, 0.5)",
  water: "rgba(161, 194, 241, 0.5)",
}

export enum STATS {
  "HP" = "HP", 
  "ATK" = "ATK", 
  "DEF" = "DEF", 
  "SPD" = "SPD", 
  "EXP" = "EXP",
}

export const STATS_COLORS: Record<STATS, string> = {
  HP: "rgba(223, 78, 78, 0.5)",
  ATK: "rgba(231, 133, 68, 0.5)",
  DEF: "rgba(161, 194, 241, 0.5)",
  SPD: "rgba(121, 186, 193, 0.5)",
  EXP: "rgba(195, 229, 174, 0.5)"
}

export const COLORS_SCHEME = {
  light: {
    primary: {
      off: "#CD0A0A",
      on: "",
      container_off: "",
      container_on: "",
    },
    secondary: {
      off: "#EB8F8F",
      on: "",
      container_off: "",
      container_on: "",
    },
    tertiary: {
      off: "#F1F3DE",
      on: "",
      container_off: "",
      container_on: "",
    },
  },
  dark: {
    primary: {
      off: "#CC0A0A",
      on: "",
      container_off: "",
      container_on: "",
    },
    secondary: {
      off: "#D54A4A",
      on: "",
      container_off: "",
      container_on: "",
    },
    tertiary: {
      off: "#4D0404",
      on: "",
      container_off: "",
      container_on: "",
    },
  } 
};

export const COLORS = {
  black: "rgba(51, 51, 51, 0.5)",
  blue: "rgba(161, 194, 241, 0.5)",
  brown: "rgba(194, 176, 146, 0.5)",
  gray: "rgba(221, 221, 221, 0.5)",
  green: "rgba(195, 229, 174, 0.5)",
  pink: "rgba(255, 175, 175, 0.5)",
  purple: "rgba(190, 159, 225, 0.5)",
  red: "rgba(223, 78, 78, 0.5)",
  white: "rgba(255, 253, 249, 0.5)",
  yellow: "rgba(255, 251, 172, 0.5)",
}

export const NEUTRAL_COLORS = {
  white: "rgba(237, 239, 229, 1)",
  black: "#1A1C18",
}

export const TEXT_COLORS = {
  light: {
    title: "hsl(255, 7%, 11%)",
    subhead: "#49454F",
    body: "#7D7883",
    background: "#E7E0EC",
  }
}