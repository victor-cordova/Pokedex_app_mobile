import { useEffect, useState } from 'react';
import { API_HOST } from "../utils/constants";
import { Pokemon, PokemonList, PokemonData } from '../types/pokemon';

const resumeData = (data: PokemonData[]): Pokemon[] => {
    return data.map(item => ({
        name: item.name,
        order: item.order,
        sprite: item.sprites.other.home.front_default,
        type: item.types[0].type.name
    }))
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

    async function fetchPokemons () {
        try {
            const url = `${API_HOST}/pokemon?limit=20&offset=0`;
            const response = await fetch(url);
            const data: PokemonList = await response.json();
            const PokemonData: PokemonData[]= await Promise.all(data.results.map((result) => (
                fetchPokemon(result.url)
            )));
            
            setPokemons(resumeData(PokemonData));
        } catch (error) {
            throw error;
        };
    }

    useEffect( () => {
        fetchPokemons();
    }
    , [])

    return {
        pokemons
    }
}