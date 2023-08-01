import { useEffect, useState } from 'react';
import { API_HOST } from "../utils/constants";
import { Pokemon, PokemonData } from '../types/pokemon';
import { fetchColor, fetchDetailedPokemon, fetchPokemons } from '../services/pokemon';

export function useGetPokemons() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [page, setPage] = useState<number>(0);
    const [isNext, setNext] = useState<boolean>(true);

    async function loadPokemons() {
        try {
            // console.log("Renderin useGetPokemons");
            let id = 0;
            const data = await fetchPokemons(page);
            const detailedPokemons: PokemonData[]= await Promise.all(data.results.map(({url}) => (
                fetchDetailedPokemon(url)
            )));

            const colors = await Promise.all(data.results.map(({url}) => {
                id = Number(url.match(/\d+/g)[1]);
                return fetchColor(`${API_HOST}/pokemon-species/${id}/`);
                
            }));
            
            setNext(data.next === null ? false : true);
            // setPokemons((curr) => 
            //     [...curr, ...resumeData(detailedPokemons, colors)]
            // );
            setPage(page+1);
        } catch (error) {
            throw error;
        }
    }



    useEffect( () => {
        loadPokemons();
    }
    , [])

    return {
        pokemons,
        isNext,
        loadPokemons,
    }
}