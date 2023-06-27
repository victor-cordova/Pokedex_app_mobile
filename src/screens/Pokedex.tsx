import { StackScreenProps } from "@react-navigation/stack";
import { PokedexStackParamList } from "../types/navigation";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { Pokemon } from "../types/pokemon";
import { List } from "../components/List";
import { SafeAreaView, Platform, StyleSheet } from "react-native";

export default function Pokedex({ navigation }: StackScreenProps<PokedexStackParamList, "Pokedex">): JSX.Element {
  const { pokemons, fetchPokemons, isNext } = useGetPokemons();

  const selectPokemon = (pokemon: Pokemon) => {
    navigation.navigate("Pokemon", pokemon);
  }
  
  return (
    <SafeAreaView style={[styles.container, styles.border]}>
      <List selectPokemon={selectPokemon} pokemons={pokemons} fetchPokemons={fetchPokemons} isNext={isNext}/>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android"? 50: 0,
    // paddingBottom: 60,
    backgroundColor: "red"
  },
  border: {
    // borderColor: "red",
    // borderWidth: 1,
    // borderRadius: 1
  },
})