import { TYPE_COLORS, STATS_COLORS, STATS } from "./constants";

export function getPokemonTypeColor (type: string) {
    return TYPE_COLORS[type.toLowerCase()] || "black";
}

export function getPokemonStatColor (type: STATS) {
    return STATS_COLORS[type] || "black";
}