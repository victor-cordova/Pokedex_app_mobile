import { UseQueryResult, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { Pokemon, PokemonDB } from '../types/pokemon';
import { loadPokemons, loadWholePokemons } from '../services/pokemon';
import * as SQLite from 'expo-sqlite';
import { PokemonsDatabase } from '../db/pokemonsDataBase';

interface DataContextI {
	pokemonsQuery: UseQueryResult<PokemonDB[], unknown>,
}

const DB = PokemonsDatabase.getInstance();
DB.createTable();
export const DataContext = createContext<DataContextI | undefined>(undefined);

async function handleRequest () {
	try {
		let data = await DB.getData();
		// console.log("dataDB: ", data.length);
		if (data.length === 0) {
			const dataByApi = await loadWholePokemons();

			await DB.insertData(dataByApi);
			data = await DB.getData();
		}
		return data;
	} catch (error) {
		console.error(error);
	}
}

export function DataProvider({ children }: {children: JSX.Element}) {
	const pokemonsQuery = useQuery({
		queryKey: ["data"],
		queryFn: () => handleRequest(),
	})

	return (
		<DataContext.Provider value={{ pokemonsQuery }}>
			{ children}
		</DataContext.Provider>
	)
}