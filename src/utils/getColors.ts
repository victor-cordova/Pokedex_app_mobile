import { TYPE_COLORS, STATS_COLORS, STATS, COLORS } from "./constants";

export function getPokemonTypeColor (type: string) {
    return TYPE_COLORS[type.toLowerCase()] || "black";
}

export function getPokemonStatColor (type: STATS) {
    return STATS_COLORS[type] || "black";
}

export function getColor (color: string) {
    return COLORS[color] || "black";
}