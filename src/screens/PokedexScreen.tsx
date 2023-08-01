import { PokedexStackScreenProps } from "../types/navigation";
import { Pokemon } from "../types/pokemon";
import { List } from "../components/List";
import { SafeAreaView, Platform, StyleSheet, Text } from "react-native";
import { useContext, useMemo } from 'react';
import { DataContext } from '../contexts/DataContext';

type Props = PokedexStackScreenProps<"Pokedex">;

export function PokedexScreen({ navigation }: Props): JSX.Element {
  // useEffect(() => {
  //   console.log("Se está re-renderizando pokedexScreen.");
  // });
  const {
    data,
    isError,
    isLoading
  } = useContext(DataContext);

  // function navigateToPokemonScreen(data: Pokemon, handleButtonPress) {
  //   navigation.navigate("Pokemon", {
  //     data,
  //     handleNavigation: handleButtonPress
  //   });
  // }
  if (isLoading) return <Text>Is loading</Text>

  return (
    <SafeAreaView style={[styles.container, styles.border]}>
      <List
        // selectPokemon={navigateToPokemonScreen}
        pokemons={data}
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