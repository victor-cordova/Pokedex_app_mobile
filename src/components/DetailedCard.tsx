import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { PokedexStackParamList } from "../types/navigation";
import { SECTIONS, SectionBarNav } from "./SectionBarNav";
import AboutScreen from './sections/About'
import MovesScreen from './sections/Moves'
import StatsScreen from './sections/Stats'
import { useState } from "react";
import { Pokemon } from "../types/pokemon";

type NavigatorI = StackScreenProps<PokedexStackParamList, "Pokemon">;
// route
interface DetailedCardI {
    navigator: NavigatorI
}

interface SectionHandlerI {
    selected: SECTIONS,
    pokemon: Pokemon,
}

function SectionHandler({ selected, pokemon }: SectionHandlerI) {
    switch (selected) {
        case SECTIONS.ABOUT:
            return <AboutScreen pokemon={pokemon}/>
            // break;
    
        case SECTIONS.MOVES:
            return <MovesScreen abilities={pokemon.abilities} moves={pokemon.moves}/>
            // break;
    
        case SECTIONS.STATS:
            return <StatsScreen pokemon={pokemon}/>
            // break;
            
        default:
            break;
    }
}

export function DetailedCard ({navigator}: DetailedCardI) {
    const [sectionSelected, setSectionSelected] = useState<SECTIONS>(SECTIONS.ABOUT);
    const sections: SECTIONS[] = [SECTIONS.ABOUT, SECTIONS.MOVES, SECTIONS.STATS];

    const pokemon = navigator.route.params;

    function switchSection(section: SECTIONS) {
        setSectionSelected(section);
    }
    
    return (
        <View style={[styles.card, styles.border]}>
            <View style={[styles.header, styles.border]}>
                <Image 
                    source={{uri: pokemon.sprite}}
                    // style={{ width: 20, height: 20}}  
                    style={[styles.sprite, styles.border]}
                />

                <Text style={[styles.name, styles.border]}>{pokemon.name}</Text>
                
                <View style={[styles.orderContainer, styles.border]}>
                    {/* <Image 
                        source={require("../../assets/icon-pokeball.png")}
                        style={[styles.icon, styles.border]}  
                        // style={[styles.sprite, styles.border]}
                    /> */}
                    <Text style={[styles.order, styles.border]}>
                        # {`${pokemon.order}`.padStart(3, "0")}
                    </Text>
                </View>
            </View>
            <SectionBarNav sectionSelected={sectionSelected} sections={sections} switchSection={switchSection}/>
            {/* <About pokemon={pokemon}/> */}
            <SectionHandler pokemon={pokemon} selected={sectionSelected}/>
        </View>    
    )
}

const styles = StyleSheet.create({
    card: {
        // height: 130,
        width: "90%",

        // ,
        padding: 20,
    
        alignSelf: "center",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    
        // borderColor: "black",
        // borderWidth: 1,
        // borderRadius: 15,
        margin: 20,
        backgroundColor: "blue"
    },
    orderContainer: {
        alignSelf: "center",
        flexDirection:'row'
    },
    order: {
        color: "#fff",
        fontSize: 11,
  
        // marginLeft: 5,
        // alignSelf: "center"
    },
    name: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",

        alignSelf: "center"
    },
    sprite: { 
        // height: 60,
        // width: 90,
        width: 120, 
        height: 120,
          // transform: "translateY(50%)",
  
          // flex: 1,
        alignSelf: "flex-end",
    },
    header: {
        marginBottom: 10,
    },
    border: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 1
    },
    list: {
        // bac
    }
})