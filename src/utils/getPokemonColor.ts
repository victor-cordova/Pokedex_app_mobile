import { POKEMON_TYPE_COLORS, TYPE_COLORS } from "./constants";

export function getPokemonColor (type: string) {
    return POKEMON_TYPE_COLORS[type.toLowerCase()] || "black";
}

export function getPokemonColorV2 (type: string) {
    return TYPE_COLORS[type.toLowerCase()] || "black";
}
