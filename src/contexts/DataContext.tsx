import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { Pokemon } from '../types/pokemon';
import { loadPokemons } from '../services/pokemon';

interface DataContextI {
	pokemonsQuery: UseQueryResult<Pokemon[], unknown>,
}

export const DataContext = createContext<DataContextI | undefined>(undefined);

export function DataProvider({ children }: {children: JSX.Element}) {
	const pokemonsQuery = useQuery({
		queryKey: ["pokemons"],
		queryFn: () => loadPokemons(),
	})
    
	return (
		<DataContext.Provider value={{ pokemonsQuery }}>
			{ children}
		</DataContext.Provider>
	)
}