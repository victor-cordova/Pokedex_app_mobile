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

export interface Pokemon {
    height: number,
    name: string,
    order: number,
    sprite: string,
    types: string[],
    weight: number,
    stats: {
        name: StatsI,
        stat: number
    }[],
}

type PokemonStats = "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed";

export interface PokemonData {
    id: number,
    name: string,
    sprites: {
        other: {
            home: {
                front_default: string,
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
    }[]
}
