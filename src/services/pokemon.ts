import { capitalize } from "lodash";
import { Pokemon, PokemonData, PokemonList } from "../types/pokemon";
import { API_HOST, STATS } from "../utils/constants";
import { getColor } from "../utils/getColors";

export async function fetchColor (url: string): Promise<string> {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data.color.name;
    } catch (e) {
        console.error(e);
        throw e;
    };
}

export async function fetchDetailedPokemon (url: string): Promise<PokemonData> {
    try {
        const response = await fetch(url);
        const data: PokemonData = await response.json();

        return data;
    } catch (e) {
        console.error(e);
        throw e;
    };
}

export async function fetchData (limit: number): Promise<PokemonList> {
    try {
        const url = `${API_HOST}/pokemon?${40}=10&offset=0`;
        // const url = `${API_HOST}/pokemon?limit=50&offset=${page * 50}`;
        const response = await fetch(url);
        const data: PokemonList = await response.json();

        return data;

    } catch (e) {
        console.error(e);
        throw e;
    };
}

export async function fetchPokemons (limit: number): Promise<PokemonList> {
    try {
        const url = `${API_HOST}/pokemon?limit=${40}&offset=0`;
        // const url = `${API_HOST}/pokemon?limit=50&offset=${page * 50}`;
        const response = await fetch(url);
        const data: PokemonList = await response.json();

        return data;

    } catch (e) {
        console.error(e);
        throw e;
    };
}

// const savePokemons = ()

const resumeData = (data: PokemonData[], colors: string[]): Pokemon[] => {
    return data.map((item, index) => {
        const types = item.types.map(iter => capitalize(iter.type.name));
        const abilities = item.abilities.map(ability => ability.ability.name);
        const moves = item.moves.slice(0, 32).map(move => move.move.name);
        
        return {
            name: capitalize(item.name),
            order: item.id,
            sprite: item.sprites.other.home.front_default,
            types,
            height: item.height,
            weight: item.weight,
            abilities: abilities.slice(0, 2),
            stats: [
            {
                name: STATS.HP,
                stat: item.stats[0].base_stat
            },
            {
                name: STATS.ATK,
                stat: item.stats[1].base_stat
            },
            {
                name: STATS.DEF,
                stat: item.stats[2].base_stat
            },
            {
                name: STATS.SPD,
                stat: item.stats[5].base_stat
            },
            {
                name: STATS.EXP,
                stat: item.base_experience
            },
            ],
            moves: moves,
            color: getColor(colors[index]),
        }
    })
}


export async function loadPokemons() {
    try {
        let id = 0;
        const data = await fetchPokemons(100);
        const detailedPokemons: PokemonData[]= await Promise.all(data.results.map(({url}) => (
            fetchDetailedPokemon(url)
        )));

        const colors = await Promise.all(data.results.map(({url}) => {
            id = Number(url.match(/\d+/g)[1]);
            return fetchColor(`${API_HOST}/pokemon-species/${id}/`);
            
        }));

        return resumeData(detailedPokemons, colors);
    } catch (error) {
        throw error;
    }
}
