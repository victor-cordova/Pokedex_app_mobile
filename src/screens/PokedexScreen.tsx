import { StackScreenProps } from "@react-navigation/stack";
import { PokedexStackParamList } from "../types/navigation";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { Pokemon } from "../types/pokemon";
import { List } from "../components/List";

export function PokedexScreen({ navigation }: StackScreenProps<PokedexStackParamList, "Pokedex">): JSX.Element {
  const { pokemons, fetchPokemons, isNext } = useGetPokemons();

  const selectPokemon = (pokemon: Pokemon) => {
    navigation.navigate("Pokemon", pokemon);
  }
  
  return (
    <List selectPokemon={selectPokemon} pokemons={pokemons} fetchPokemons={fetchPokemons} isNext={isNext}/>
    )
}