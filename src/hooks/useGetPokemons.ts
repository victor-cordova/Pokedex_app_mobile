import { useEffect, useState } from 'react';
import { API_HOST, STATS } from "../utils/constants";
import { Pokemon, PokemonList, PokemonData } from '../types/pokemon';

const resumeData = (data: PokemonData[]): Pokemon[] => {
    return data.map(item => {
        const types = item.types.map(iter => iter.type.name);
        const abilities = item.abilities.map(ability => ability.ability.name);
        const moves = item.moves.slice(0, 10).map(move => move.move.name);
        return {
            name: item.name,
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
            const url = `${API_HOST}/pokemon?limit=10&offset=${page * 10}`;
            const response = await fetch(url);
            const data: PokemonList = await response.json();
            const pokemonData: PokemonData[]= await Promise.all(data.results.map((result) => (
                fetchPokemon(result.url)
            )));

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