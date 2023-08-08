import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFavoriteIds } from "../services/favorite";
import { useContext, useMemo } from "react";
import { DataContext } from "../contexts/DataContext";
import { FavoriteStackScreenProps } from "../types/navigation";
import { List } from "../components/List";
import { SafeAreaView, Platform, StyleSheet, Text } from "react-native";

type Props = FavoriteStackScreenProps<"Pokemons">;

export function FavoriteScreen ({ navigation }: Props): JSX.Element {
  const data = useContext(DataContext).pokemonsQuery.data;

	const {data: ids} = useQuery({
		queryKey: ["favoriteIds"],
		queryFn: () => getFavoriteIds(),
	})

	function resizeIds(ids: number[]) {
		const {order} = data[data.length - 1];
		const lastId = ids[ids.length - 1];

		if (lastId <= order) return ids;
		const newLastIndex = ids.findIndex(id => order < id);

		return ids.slice(0, newLastIndex);
	}

  function filterData() {
    if (ids === undefined) return [];
		const sortedIds = [...ids].sort((a, b) => a - b);
    console.log("sortedIds: ", sortedIds);

    return resizeIds(sortedIds).map(id => data.find(item => item.order === id));
  }

  const filteredData = useMemo(filterData, [ids]);

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