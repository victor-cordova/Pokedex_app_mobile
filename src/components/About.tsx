import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { Badge } from "./Badge";
import { Pokemon } from "../types/pokemon";
import { getPokemonTypeColor } from "../utils/getColors";

interface AboutI {
    pokemon: Pokemon
}

interface BadgeLabeledI {
    label: string,
    text: string,
    unitOfMeasure: string,
}

function BadgeLabeled( { label, text, unitOfMeasure }: BadgeLabeledI ) {
    return (
        <View style={[{
            alignItems: "center",
            width: "100%"
        }, styles.border]}>
            <Text style={[{
                fontSize: 15,
                fontWeight: "bold",

                marginBottom: 10,
            }, styles.border]}>{label}</Text>
            <Badge isDetailed={true} text={text} unitOfMeasure={unitOfMeasure}/>
        </View>
    )
}

export function About({pokemon}:AboutI) {
    // const size = useWindowDimensions();
    const abilities = pokemon.abilities.map(ability => ability.length >= 10?`${ability.slice(0, 9)}...`:ability);

    return (
        <View style={[styles.info, styles.border]}>
            <View style={[styles.types, styles.border]}>
                {pokemon.types.map((type, index) => 
                    <Badge color={getPokemonTypeColor(type)} text={type} key={index} isDetailed={true}/>
                )}
            </View>
            
            <View style={[styles.types, styles.border]}>
                <BadgeLabeled label="Height" text={String(pokemon.height)} unitOfMeasure="mt"/>
                <BadgeLabeled label="Weight" text={String(pokemon.weight)} unitOfMeasure="kg"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        alignItems: "center",
        width: "100%",
        marginVertical: 10
    },
    // abilities: {
    //     flexDirection: "row",
    //     width: "100%",
    //     justifyContent: "space-around"
    // },
    // label: {

    // },
    types: {
        width: "100%",

        marginBottom: 10,

        justifyContent: "space-around",
        flexDirection: "row",
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    }
});