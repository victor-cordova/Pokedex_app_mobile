import { StyleSheet, View, Image, Text } from "react-native";
import { Pokemon } from "../../types/pokemon";
import { AXIS, Spacer } from "../Spacer";
import { FavoriteButton } from "../FavoriteButton";
import { useEffect, useState } from "react";
import { saveFavoriteId, removeFavoriteId, getFavoriteId } from "../../services/favorite";
import { useToggle } from "../../hooks/useToggle";

interface HeaderI {
    pokemon: Pokemon,
    // handleFavorite: (id: number) => void,
    handleOnButtonPress: () => void,
    isFavorite: boolean,
}

export function Header( {pokemon, handleOnButtonPress, isFavorite}: HeaderI) {
    const [isFocused, setIsFocused] = useState<boolean>(isFavorite);

	// function handleOnButtonPress () {
	// 	setIsFocused(!isFocused);
	// }
    const {
        isSelected,
        handleToggle
    } = useToggle({initialState: isFavorite});

	
	// // const favoriteIds = [];
	// async function checkIfFocused() {
	//   try {
	// 	// const favorites = await getFavoriteIds();
	// 	const favoriteId = await getFavoriteId(pokemon.order);
	// 	const isFavorite = favoriteId === pokemon.order;
  
	// 	// favoriteIds.push(...favorites);
	// 	if (isFavorite !== isFocused) setIsFocused(isFavorite);
	//   } catch (error) {
	// 	throw error;
	//   }
	// }
  
	// function toggleFocused() {
	//   if (isFocused) removeFavoriteId(pokemon.order);
	//   else saveFavoriteId(pokemon.order);
	//   // console.log(favoriteIds);
    //   handleOnButtonPress();
	//   setIsFocused(!isFocused);
	// }

    function onPress() {
        if (isFocused) removeFavoriteId(pokemon.order);
        else saveFavoriteId(pokemon.order);
        // console.log(favoriteIds);
        handleOnButtonPress();
        setIsFocused(!isFocused);
      }
  
	// useEffect(() => {
	//   checkIfFocused();
	// }, []);
    return (
        <View style={[styles.header, styles.border, {
            backgroundColor: pokemon.color
        }]}>
            <Image 
                source={{uri: pokemon.sprite}} 
                style={[styles.sprite, styles.border]}
            />

            <Spacer size={16} axis={AXIS.Y}/>

            <Text style={[styles.name, styles.border]}>{pokemon.name}</Text>

            <Spacer size={4} axis={AXIS.Y}/>

            <View style={[styles.orderContainer, styles.border]}>
                <Image 
                    source={require("../../../assets/icon_pokeball.png")}
                    style={[styles.icon, styles.border]}  
                />
                
                <Text style={[styles.order, styles.border]}>
                    {" " + `${pokemon.order}`.padStart(4, "0")}
                </Text>
            </View>
            <FavoriteButton isFocused={isFocused} handleOnPress={onPress}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },

    header: {
        width: "100%",

        alignItems: "center"
        // marginBottom: 10,
    },
    sprite: { 
        width: 200, 
        height: 200,
    },
    name: {
        // fontSize: 20,
        // color: "#fff",
        // fontWeight: "bold",
    },
    orderContainer: {
        flexDirection:'row',
        alignItems: "center"
    },
    order: {
        // color: "#fff",
        // fontSize: 13,
    },
    

    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})