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
    order: number,
    name: string,
    sprite: string,
    type: string,
}

export interface PokemonData {
    order: number,
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
    }[]
    // is_main_series: boolean;
    // generation: PokemonGeneration;
    // names: PokemonName[];
    // effect_entries: PokemonEffectEntry[];
    // effect_changes?: PokemonEffectChange[];
    // flavor_text_entries?: PokemonFlavorTextEntry[];
}
