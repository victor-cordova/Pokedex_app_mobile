import { Button, GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Pokemon } from "../../types/pokemon";
import { TEXT_COLORS } from "../../utils/constants";
import React, { useEffect, memo, useState } from "react";
import { ImageSection } from "./ImageSection";
import { InfoSection } from "./InfoSection";
import { FavoriteButton } from "../FavoriteButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { PokedexStackParamList } from "../../types/navigation";
import { getFavoriteId, removeFavoriteId, saveFavoriteId } from "../../services/favorite";
import { useToggle } from "../../hooks/useToggle";

type navigationI = StackNavigationProp<PokedexStackParamList, "Pokedex", undefined>;

interface CardLayoutI {
	pokemon: Pokemon ,
	navigation: navigationI,
}

export function CardLayout ({ 
	pokemon, 
	navigation
}: CardLayoutI) {
	const {
		isSelected,
		handleToggle
	} = useToggle({initialState: false});


	function navigateToPokemonScreen(data: Pokemon) {
	  navigation.navigate("Pokemon", {
		data,
		handleToggle,
		isSelected
	  });
	}

	async function checkIfSelected() {
		try {
			const favoriteId = await getFavoriteId(pokemon.order);
			const isFavorite = favoriteId === pokemon.order;

			if (isFavorite !== isSelected) handleToggle();
		} catch (error) {
			throw error;
		}
	}

	function handleOnPress () {
		if (isSelected) removeFavoriteId(pokemon.order);
		else saveFavoriteId(pokemon.order);

		handleToggle()
	}
  
	useEffect(() => {
	  checkIfSelected();
	}, []);
	
  return (
	<TouchableWithoutFeedback 
		onPress={() => navigateToPokemonScreen(pokemon)} 
		style={[stylesV2.container, stylesV2.border]}
	>
	  <React.Fragment>
		<ImageSection data={pokemon}/>
		<InfoSection data={pokemon}/>
		<FavoriteButton isFocused={isSelected} handleOnPress={handleOnPress}/>
	  </React.Fragment>
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