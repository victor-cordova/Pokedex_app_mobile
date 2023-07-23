import { PokedexStackScreenProps } from "../types/navigation";
import { Pokemon } from "../types/pokemon";
import { List } from "../components/List";
import { SafeAreaView, Platform, StyleSheet } from "react-native";
import { useFavoritePokemons } from "../hooks/useFavoritePokemons";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { useEffect } from "react";

type Props = PokedexStackScreenProps<"Pokedex">;

export function PokedexScreen({ navigation }: Props): JSX.Element {
  const {
    pokemons,
    isNext,
    loadPokemons,
  } = useGetPokemons();

  const {
    addId,
    deleteId,
    favoriteIds,
    findId
  } = useFavoritePokemons();

  // useEffect(() => {
  //   console.log("Se está renderizando pokedexScreen.");
  // });



  function selectPokemon(data: Pokemon) {
    navigation.navigate("Pokemon", {
      data,
      isFocused: favoriteIds.findIndex(id => id === data.order) >= 0
    });
  }

  return (
    <SafeAreaView style={[styles.container, styles.border]}>
      <List
        selectPokemon={selectPokemon}
        pokemons={pokemons}
        isNext={isNext}
        loadPokemons={loadPokemons}
        favoritesId={favoriteIds}
        addId={addId}
        deleteId={deleteId}
        findId={findId}
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