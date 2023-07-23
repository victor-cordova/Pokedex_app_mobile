import { GestureResponderEvent, StyleSheet } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Pokemon } from "../../types/pokemon";
import { TEXT_COLORS } from "../../utils/constants";
import React, { useEffect, memo } from "react";
import { ImageSection } from "./ImageSection";
import { InfoSection } from "./InfoSection";
import { FavoriteButton } from "../FavoriteButton";
import { saveFavoriteId, removeFavoriteId } from "../../services/favorite";

interface CardI {
    pokemon: Pokemon,
    onPress: (pokemon: Pokemon) => void,
    favoritesId: number[],
    addId: (id: number) => void,
    deleteId: (id: number) => void,
    findId: (id: number) => boolean,
}

export const Card = memo(function Card ({ 
    pokemon, 
    onPress, 
    addId, 
    deleteId,
    findId,
}: CardI) {

    const isFavorite = findId(pokemon.order);

    useEffect(() => {
        console.log("Rendering Card " + pokemon.name);
    });

    function handleOnPress( event: GestureResponderEvent ) {
        const id = pokemon.order;
        
        event.stopPropagation();
        if (isFavorite) {
            removeFavoriteId(id);
            deleteId(id);
        } else {
            saveFavoriteId(id);
            addId(id);    
        }
    }

  return (
    <TouchableWithoutFeedback 
        onPress={() => onPress(pokemon)} 
        style={[stylesV2.container, stylesV2.border]}
    >
        <ImageSection data={pokemon}/>
        <InfoSection data={pokemon}/>
        <FavoriteButton 
            id={pokemon.order}
            isFocused={isFavorite}
            handleOnPress={handleOnPress}
        />
    </TouchableWithoutFeedback>
  )
});

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