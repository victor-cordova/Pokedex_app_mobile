import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFavoriteIds } from "../services/favorite";
import { useContext, useMemo } from "react";
import { DataContext } from "../contexts/DataContext";
import { FavoriteStackScreenProps } from "../types/navigation";
import { List } from "../components/List";
import { SafeAreaView, Platform, StyleSheet, Text } from "react-native";
import * as SQLite from 'expo-sqlite';
import { IdsDatabase } from "../db/idsDataBase";

type Props = FavoriteStackScreenProps<"Pokemons">;

const db = IdsDatabase.getInstance();

// const createTable = () => {
// 	db.transaction(tx => {
// 	  tx.executeSql(
// 		`create table if not exists favoriteIds (
// 		  id integer primary key not null,
// 		);`
// 	  );
// 	});
// }
  
// const insertData = (data: number[]) => {
// 	let query = 'INSERT INTO favoriteIds (id) VALUES ';
// 	let values = [];
// 	data.forEach((item, index) => {
// 		query += '(?)';
// 		if (index < data.length - 1) {
// 			query += ',';
// 		}
// 		values.push(item);
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


export function FavoriteScreen ({ navigation }: Props): JSX.Element {
  const data = useContext(DataContext).pokemonsQuery.data;

	const {data: favoriteIds} = useQuery({
		queryKey: ["favoriteIds"],
		queryFn: () => db.getData(),
	})

  // console.log("ids in db: ", favoriteIds);
  // return <Text>Jeje</Text>

	function resizeIds(selectedIds: {id: number}[]) {
		const {id} = data[data.length - 1];
		const {id: selectedId} = selectedIds[selectedIds.length - 1];

		if (selectedId <= id) return selectedIds;

		const newLastIndex = selectedIds.findIndex(({id: selectedId}) => id < selectedId);

		return selectedIds.slice(0, newLastIndex);
	}

  function filterData() {
    if (favoriteIds === undefined) return [];
		const sortedIds = [...favoriteIds].sort((a, b) => a.id - b.id);
    console.log("sortedIds: ", sortedIds);

    return resizeIds(sortedIds).map(({id}) => data.find(item => item.id === id));
  }

  const filteredData = useMemo(filterData, [favoriteIds]);

  return (
    <SafeAreaView style={[styles.container, styles.border]}>
      <List
        pokemons={filteredData}
        navigation={navigation}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    paddingHorizontal: 16,
    // backgroundColor: TEXT_COLORS.light.title,
    // backgroundColor: "red"
  },
  border: {
    // borderColor: "red",
    // borderWidth: 1,
    // borderRadius: 1
  },
})