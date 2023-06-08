import { useEffect, useState } from 'react';
import { API_HOST } from "../utils/constants";
import { Pokemon, PokemonList, PokemonData } from '../types/pokemon';

const resumeData = (data: PokemonData[]): Pokemon[] => {
    // const types: string[] = [];
    
    return data.map(item => {
        const types = item.types.map(iter => iter.type.name);
        
        
        return {
            name: item.name,
            order: item.id,
            sprite: item.sprites.other.home.front_default,
            types
        }
    })
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
            const url = `${API_HOST}/pokemon?limit=20&offset=${page * 20}`;
            const response = await fetch(url);
            const data: PokemonList = await response.json();
            const pokemonData: PokemonData[]= await Promise.all(data.results.map((result) => (
                fetchPokemon(result.url)
            )));
            // console.log(pokemonData[0]);
            setNext(data.next === null ?false:true);
            setPokemons([...pokemons, ...resumeData(pokemonData)]);
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