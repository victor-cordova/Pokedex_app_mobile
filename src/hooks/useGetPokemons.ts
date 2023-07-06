import { useEffect, useState } from 'react';
import { API_HOST, STATS } from "../utils/constants";
import { getColor } from "../utils/getColors";
import { Pokemon, PokemonList, PokemonData } from '../types/pokemon';
import { capitalize } from "lodash";

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

async function fetchColor (url: string): Promise<string> {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data.color.name;
    } catch (error) {
        throw error;
    };
}

async function fetchPokemon (url: string): Promise<PokemonData> {
    try {
        const response = await fetch(url);
        const data: PokemonData = await response.json();

        return data;
    } catch (error) {
        throw error;
    };
}

export function useGetPokemons() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [page, setPage] = useState<number>(0);
    const [isNext, setNext] = useState<boolean>(true);

    async function fetchPokemons () {
        try {
            const url = `${API_HOST}/pokemon?limit=10&offset=${page * 10}`;
            let id = "0";
            const response = await fetch(url);
            const data: PokemonList = await response.json();
            const pokemonData: PokemonData[]= await Promise.all(data.results.map(({url}) => (
                fetchPokemon(url)
            )));

            const colors = await Promise.all(data.results.map(({url}) => {
                id = url.match(/\d+/g)[1];
                return fetchColor(`${API_HOST}/pokemon-species/${id}/`);
                
            }));
            
            setNext(data.next === null ?false:true);
            setPokemons([...pokemons, ...resumeData(pokemonData, colors)]);
            setPage(page+1);
        } catch (error) {
            throw error;
        };
    }

    useEffect( () => {
        fetchPokemons();
    }
    , [])

    return {
        pokemons,
        fetchPokemons,
        isNext
    }
}