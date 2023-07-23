import { PokemonData, PokemonList } from "../types/pokemon";
import { API_HOST } from "../utils/constants";

interface fetchPokemonsI {
    page: number,
}

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

export async function fetchPokemons (page: number): Promise<PokemonList> {
    try {
        const url = `${API_HOST}/pokemon?limit=10&offset=${page * 10}`;
        // const url = `${API_HOST}/pokemon?limit=50&offset=${page * 50}`;
        const response = await fetch(url);
        const data: PokemonList = await response.json();

        // console.log(data);
        return data;

    } catch (e) {
        console.error(e);
        throw e;
    };
}

