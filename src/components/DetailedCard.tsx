import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
// import { StatBar } from "../components/StatBar";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { PokedexStackParamList } from "../types/navigation";
import { useState } from "react";
// import { Badge } from "./Badge";
// import { STATS } from "../utils/constants";
// import { getPokemonStatColor, getPokemonTypeColor } from "../utils/getColors";
// import { Pokemon } from "../types/pokemon";
// import { About } from "./About";

type NavigatorI = StackScreenProps<PokedexStackParamList, "Pokemon">;
// route
interface DetailedCardI {
    navigator: NavigatorI
}

interface ListI {
    sectionSelected: SECTIONS,
    switchSection: (section: SECTIONS) => void,
    sections: SECTIONS[]
}

enum SECTIONS {
    ABOUT = "about",
    STATS = "stats",
    MOVES = "moves",
}

interface RenderFunctionI {
    item: SECTIONS,
    onPress: (section: SECTIONS) => void
}

function List({sectionSelected, switchSection, sections}: ListI) {
    function RenderFunction({item, onPress}: RenderFunctionI) {
        return (
            <View style={[styles.list, styles.border]}>
                <Text 
                    onPress={() => onPress(item)} 
                    style={[styles.list, styles.border, {
                        backgroundColor: item === sectionSelected?"blue":"red"
                    }]}
                >
                    {item}
                </Text>
            </View>
            
        )
    }
    return (
        <FlatList
            data={sections}
            renderItem={({item})=> <RenderFunction item={item} onPress={switchSection}/>}
            keyExtractor={(item, index) => String(index)}
            horizontal={true}
            // contentContainerStyle={[styles.list, styles.border]}
            style={[styles.list, styles.border]}
            // extraData={selectedId}
        />
    )
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
            <List sectionSelected={sectionSelected} sections={sections} switchSection={switchSection}/>
            {/* <About pokemon={pokemon}/> */}
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
    // icon: { 
    //     width: 20, 
    //     height: 20
    // },
    info: {
        height: "100%",
        width: 200,
        // backgroundColor: "grey",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
  
        paddingHorizontal: 10,
        
        // alignSelf: "flex-start",
  
        // flexDirection: "c",
        // alignItems: "center",
        justifyContent: "space-between"
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