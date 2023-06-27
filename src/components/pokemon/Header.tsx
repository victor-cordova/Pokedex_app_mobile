// import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { StyleSheet, View, Image, Text, FlatList, Platform } from "react-native";
// import { PokedexStackParamList } from "../types/navigation";
// import { SECTIONS, SectionBarNav } from "./SectionBarNav";
// import AboutScreen from './sections/About'
// import MovesScreen from './sections/Moves'
// import StatsScreen from './sections/Stats'
import { useState } from "react";
import { Pokemon } from "../../types/pokemon";
import { capitalize } from "lodash";
// import { getPokemonTypeColor } from "../utils/getColors";

interface HeaderI {
    pokemon: Pokemon,
}

export default function Header( {pokemon}: HeaderI) {
    
    return (
        <View style={[styles.header, styles.border]}>
            <Image 
                source={{uri: pokemon.sprite}}
                // style={{ width: 20, height: 20}}  
                style={[styles.sprite, styles.border]}
            />

            <Text style={[styles.name, styles.border]}>{pokemon.name}</Text>
            
            <View style={[styles.orderContainer, styles.border]}>
                <Image 
                    source={require("../../../assets/icon-pokeball.png")}
                    style={[styles.icon, styles.border]}  
                    // style={[styles.sprite, styles.border]}
                />
                <Text style={[styles.order, styles.border]}>
                    {" " + `${pokemon.order}`.padStart(4, "0")}
                </Text>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    card: {
        height: "100%",
        width: "100%",

        // ,
        // paddingTop: 40,
        // padding: 20,
        // paddingTop: 40,
        // paddingHorizontal: 40,
        // padding: 40,
        padding: 40,
        // padding: 40,
    
        alignSelf: "center",
        // flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
    
        // borderColor: "black",
        // borderWidth: 1,
        borderRadius: 15,
        // margin: 20,
        // backgroundColor: "blue",

        // flex: 1
    },
    icon: {
        width: 20,
        height: 20,
    },

    header: {
        width: "100%",

        alignItems: "center"
        // marginBottom: 10,
    },

    orderContainer: {
        // alignSelf: "center",
        flexDirection:'row'
    },
    order: {
        color: "#fff",
        fontSize: 13,
  
        // marginLeft: 5,
        // alignSelf: "center"
    },
    name: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",

        // alignSelf: "center"
    },
    sprite: { 
        // height: 60,
        // width: 90,
        width: 200, 
        height: 200,
          // transform: "translateY(50%)",
  
          // flex: 1,
        // alignSelf: "flex-end",
    },
    
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
    list: {
        // bac
    }
})