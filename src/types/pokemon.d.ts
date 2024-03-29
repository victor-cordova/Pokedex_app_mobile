import { STATS } from "../utils/constants";

interface PokemonAbility {
    name: string;
    url: string;
}

interface PokemonGeneration {
    name: string;
    url: string;
}
  
interface PokemonLanguage {
    name: string;
    url: string;
}

interface PokemonFlavorTextEntry {
    flavor_text: string;
    language: PokemonLanguage;
    version_group: {
    name: string;
    url: string;
    };
}

interface PokemonEffectEntry {
    effect: string;
    short_effect: string;
    language: PokemonLanguage;
}

interface PokemonEffectChange {
    version_group: {
    name: string;
    url: string;
    };
    effect_entries: PokemonEffectEntry[];
}

interface PokemonName {
    name: string;
    language: PokemonLanguage;
}

export interface PokemonListResult {
    name: string,
    url: string,
}

export interface PokemonList {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonListResult[]
}
// data.sprites.other.home.front_default

export interface PokemonDB {
    height: number,
    name: string,
    id: number,
    sprite: string,
    types: string,
    weight: number,
    stats: string,
    abilities: string,
    moves: string,
    color: string,
}

export interface Pokemon {
    height: number,
    name: string,
    id: number,
    sprites: string[],
    types: string[],
    weight: number,
    stats: {
        name: STATS,
        stat: number
    }[],
    abilities: string[],
    moves: string[],
    color: string,
}

type PokemonStats = "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed";

export interface PokemonData {
    id: number,
    name: string,
    sprites: {
        other: {
            home: {
                front_default: string,
            },
            "official-artwork": {
                front_shiny: string
            }
        }
    },
    types: {
        slot: number,
        type: {
            name: string
        }
    }[],
    height: number,
    weight: number,
    base_experience: number,
    stats: {
        base_stat: number,
        stat: {
            name: PokemonStats
        }
    }[],
    abilities: {
        ability: {
            name: string,
        }
    }[],
    moves: {
        move: {
            name: string
        }
    }[]
}
