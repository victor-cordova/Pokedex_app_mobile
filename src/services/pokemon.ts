import { capitalize } from "lodash";
import { Pokemon, PokemonData, PokemonList } from "../types/pokemon";
import { API_HOST, STATS } from "../utils/constants";
import { getColor } from "../utils/getColors";
import * as SQLite from 'expo-sqlite';

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

export async function fetchPokemons (limit: number, nextUrl: string | null): Promise<PokemonList> {
	try {
		let url = `${API_HOST}/pokemon?limit=${limit}&offset=0`;
		if (nextUrl !== null) {
			url = nextUrl;  
		}
		const response = await fetch(url);
		const data: PokemonList = await response.json();
		return data;

	} catch (e) {
		console.error(e);
		throw e;
	};
}

export async function fetchWholePokemons (): Promise<PokemonList> {
    try {
        const url = `${API_HOST}/pokemon?limit=1000&offset=0`;
        // const url = `${API_HOST}/pokemon?limit=50&offset=${page * 50}`;
        const response = await fetch(url);
        const data: PokemonList = await response.json();

        return data;
    } catch (e) {
        console.error(e);
        throw e;
    };
}

const resumeData = (data: PokemonData[], colors: string[]): Pokemon[] => {
	const types: string[] = [];
	const abilities: string[] = [];
	const moves: string[] = [];
	const sprites: string[] = [];

	return data.map((item, index) => {
		types.length = 0;
		abilities.length = 0;
		moves.length = 0;
		sprites.length = 0;

		types.push(...item.types.map(({type}) => capitalize(type.name)));
		abilities.push(...item.abilities.map(({ability}) => ability.name));
		moves.push(...item.moves.slice(0, 32).map(({move}) => move.name));

		if (item.sprites.other.home.front_default) {
			sprites.push(item.sprites.other.home.front_default);
		}
		sprites.push(item.sprites.other["official-artwork"].front_shiny)

		return {
			name: capitalize(item.name),
			id: item.id,
			sprites,
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
			moves,
			color: getColor(colors[index]),
		}
	})
}

export async function loadPokemons(nextUrl: string | null): Promise<
{
	data:
	Pokemon[],
	nextUrl: string | null
}
> {
	try {
		let id = 0;
		const data = await fetchPokemons(1081, null);
		const detailedPokemons: PokemonData[]= await Promise.all(data.results.map(({url}) => (
			fetchDetailedPokemon(url)
		)));

		const colors = await Promise.all(data.results.map(({url}) => {
			id = Number(url.match(/\d+/g)[1]);

			return fetchColor(`${API_HOST}/pokemon-species/${id}/`);
		}));

		return {
			data: resumeData(detailedPokemons, colors),
			nextUrl: data.next
		};
		// return resumeData(detailedPokemons, colors);
	} catch (error) {
		throw error;
	}
}

export async function loadWholePokemons() {
	try {
		let id = 0;
		const data = await fetchWholePokemons();
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

export async function loadPokemon(id: number): Promise<Pokemon> {
	try {
		let url = `${API_HOST}/pokemon/${id}`;
		let color_url = `${API_HOST}/pokemon-species/${id}`;
		const detailedPokemon: PokemonData = await fetchDetailedPokemon(url);
		const color = await fetchColor(color_url);

		return resumeData([detailedPokemon], [color])[0];
	} catch (error) {
		throw error;
	}
}