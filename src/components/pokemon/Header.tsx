import { StyleSheet, View, Image, Text } from "react-native";
import { Pokemon } from "../../types/pokemon";
import { AXIS, Spacer } from "../Spacer";
import { FavoriteButton } from "../FavoriteButton";
import { useState } from "react";
import { saveFavoriteId, removeFavoriteId } from "../../services/favorite";

interface HeaderI {
    pokemon: Pokemon,
    // handleFavorite: (id: number) => void,
    isFocused: boolean,
}

export function Header( {pokemon, isFocused}: HeaderI) {
    const [isFavorite, setIsFavorite] = useState(isFocused);

    function handleOnPress() {
        const id = pokemon.order;

        if (isFavorite) {
            removeFavoriteId(id);
            setIsFavorite(false);
        } else {
            saveFavoriteId(id);
            setIsFavorite(true);
        }
    }
    
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
            <FavoriteButton id={pokemon.order} isFocused={isFavorite} handleOnPress={handleOnPress}/>
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