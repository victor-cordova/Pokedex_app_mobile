import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { StyleSheet, View, Image, Text, FlatList, Platform } from "react-native";
import { PokedexStackParamList } from "../types/navigation";
// import { SECTIONS, NavigationBar } from "./pokemon/NavigationBar";
// import AboutScreen from './sections/About'
// import MovesScreen from './sections/Moves'
// import StatsScreen from './sections/Stats'
import { useState } from "react";
import { Pokemon } from "../types/pokemon";
import { getPokemonTypeColor } from "../utils/getColors";
import Header from "./pokemon/Header";

type NavigatorI = StackScreenProps<PokedexStackParamList, "Pokemon">;
// route
interface DetailedCardI {
    navigator: NavigatorI
}

export function DetailedCard ({navigator}: DetailedCardI) {
    // const [sectionSelected, setSectionSelected] = useState<SECTIONS>(SECTIONS.ABOUT);
    // const sections: SECTIONS[] = [SECTIONS.ABOUT, SECTIONS.MOVES, SECTIONS.STATS];

    // const pokemon = navigator.route.params;

    // function switchSection(section: SECTIONS) {
    //     setSectionSelected(section);
    // }
    
    return (
        <View style={[styles.card, styles.border, {
            backgroundColor: "green",
        }]}>
            {/* <Header pokemon={pokemon}/> */}
            {/* <Spacer/> */}
            
            {/* <Spacer/> */}
            {/* <SectionHandler pokemon={pokemon} selected={sectionSelected}/> */}
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
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
    list: {
        // bac
    }
})