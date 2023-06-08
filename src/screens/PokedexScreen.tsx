import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, FlatList, StyleSheet, StatusBar, Image } from "react-native";
import { PokedexStackParamList } from "../types/navigation";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { Pokemon } from "../types/pokemon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PokemonList } from "../components/PokemonList";

export function PokedexScreen({ navigation }: StackScreenProps<PokedexStackParamList, "Pokedex">): JSX.Element {
  const { pokemons, fetchPokemons, isNext } = useGetPokemons();

  const selectPokemon = (pokemon: Pokemon) => {
    navigation.navigate("Pokemon", pokemon);
  }
  
  return (
      <View>
        <PokemonList selectPokemon={selectPokemon} pokemons={pokemons} fetchPokemons={fetchPokemons} isNext={isNext}/>
      </View>   
    )
}