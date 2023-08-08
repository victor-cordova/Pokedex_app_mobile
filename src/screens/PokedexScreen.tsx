import { PokedexStackScreenProps } from "../types/navigation";
import { Pokemon } from "../types/pokemon";
import { List } from "../components/List";
import { SafeAreaView, Platform, StyleSheet, Text } from "react-native";
import { useContext, useMemo } from 'react';
import { DataContext } from '../contexts/DataContext';

type Props = PokedexStackScreenProps<"Pokemons">;

export function PokedexScreen({ navigation }: Props): JSX.Element {
  const {
    data
  } = useContext(DataContext).pokemonsQuery;

  return (
    <SafeAreaView style={[styles.container, styles.border]}>
      <List
        // selectPokemon={navigateToPokemonScreen}
        pokemons={data}
        // favoriteIds={favoriteIdsQuery.data}
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