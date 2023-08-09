import { UseQueryResult, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { Pokemon } from '../types/pokemon';
import { loadPokemons, loadWholePokemons } from '../services/pokemon';
import * as SQLite from 'expo-sqlite';

interface DataContextI {
	pokemonsQuery: UseQueryResult<Pokemon[], unknown>,
}

// const db = SQLite.openDatabase('pokemon.db');

// const createTable = () => {
// 	db.transaction(tx => {
// 	  tx.executeSql(
// 		`create table if not exists pokemons (
// 		  id integer primary key not null,
// 		  height integer,
// 		  name text,
// 		  sprite text,
// 		  types text,
// 		  weight integer,
// 		  stats text,
// 		  abilities text,
// 		  moves text,
// 		  color text
// 		);`
// 	  );
// 	});
// }
  
// const insertData = (data: Pokemon[]) => {
// 	let query = 'INSERT INTO pokemons (id, height, name, sprite, types, weight, stats, abilities, moves, color) VALUES ';
// 	let values = [];
// 	data.forEach((item, index) => {
// 		query += '(?,?,?)';
// 		if (index < data.length - 1) {
// 			query += ',';
// 		}
// 		values.push(item.order);
// 		values.push(item.height);
// 		values.push(item.name);
// 		values.push(JSON.stringify(item.types));
// 		values.push(item.weight);
// 		values.push(JSON.stringify(item.stats));
// 		values.push(JSON.stringify(item.abilities));
// 		values.push(JSON.stringify(item.moves));
// 		values.push(item.color);
// 	});

// 	db.transaction(tx => {
// 		tx.executeSql(
// 			query,
// 			values,
// 			(tx, results) => {
// 					if (results.rowsAffected > 0) {
// 							console.log('Insert success');
// 					} else {
// 							console.log('Insert failed');
// 					}
// 			}
// 	);
// 	});
// }
  
// const fetchData = async () => {
// 	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
// 	const data = await response.json();
// 	return data.results.map((pokemon, index) => ({ id: index + 1, name: pokemon.name }));
// }

// const getData = () => {
// 	let data: SQLite.SQLResultSetRowList;
// 	db.transaction(tx => {
// 		tx.executeSql('select * from pokemons', [], (_, { rows }) =>
// 			// setPokemon(rows._array)
// 			data = rows
// 			// return
// 			// console.log("ss")
// 		);
// 	});

// 	return data;
// }

export const DataContext = createContext<DataContextI | undefined>(undefined);

export function DataProvider({ children }: {children: JSX.Element}) {
	// const {data, isLoading} = useQuery({
	// 	queryKey: ["data"],
	// 	queryFn: () => loadWholePokemons(),
	// })

	const pokemonsQuery = useQuery({
		queryKey: ["data"],
		queryFn: () => loadWholePokemons(),
		// enabled: isLoading
	})

	// const {
	// 	fetchNextPage,
	// 	fetchPreviousPage,
	// 	hasNextPage,
	// 	hasPreviousPage,
	// 	isFetchingNextPage,
	// 	isFetchingPreviousPage,
	// 	...result
	//   } = useInfiniteQuery({
	// 	queryKey: ["data"],
	// 	queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
	// 	...options,
	// 	getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
	// 	// getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
	// })

	return (
		<DataContext.Provider value={{ pokemonsQuery }}>
			{ children}
		</DataContext.Provider>
	)
}