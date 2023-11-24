import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Pokemon, PokemonDB } from "../../types/pokemon";
import { TEXT_COLORS } from "../../utils/constants";
import { Fragment, useCallback, useMemo } from "react";
import { ImageSection } from "./ImageSection";
import { InfoSection } from "./InfoSection";
import { StackNavigationProp } from "@react-navigation/stack";
import { PokemonsStackParamList } from "../../types/navigation";
import { parseData } from "../../utils/parseData";

type navigationI = StackNavigationProp<PokemonsStackParamList, "Pokemons", undefined>;

interface DetailLayoutI {
	pokemon: PokemonDB ,
	navigation: navigationI,
	// isFavorite: boolean,
}

export function DetailLayout ({ 
	pokemon, 
	navigation,
}: DetailLayoutI) {

	const navigateToPokemonScreen = useCallback((id: number) => {
	  navigation.navigate("Pokemon", {
		id,
	  });
	}, []);

	const dataParsed = parseData(pokemon);

  return (
	<TouchableWithoutFeedback 
		onPress={() => navigateToPokemonScreen(pokemon.id)} 
		style={[stylesV2.container, stylesV2.border]}
	>
	  <Fragment>
			<ImageSection data={dataParsed}/>
			<InfoSection data={dataParsed}/>
	  </Fragment>
	</TouchableWithoutFeedback>
  )
}

const stylesV2 = StyleSheet.create({
  border: {
	// borderColor: "red",
	// borderWidth: 1,
	// borderRadius: 1
  },
  container: {
	height: 152,
	// height: 402,
	width: "100%",
	backgroundColor: TEXT_COLORS.light.background,
	// position: "relative",
	

	flexDirection: "row",
	// alignSelf: "center",
	alignItems: "center",
	justifyContent: "space-between",

	// borderColor: "black",
	// borderWidth: 1,
	borderRadius: 12,
	marginBottom: 8,
  },
});