import { StyleSheet, View, Text } from "react-native";
import { Badge } from "../../Badge";
import { Pokemon } from "../../../types/pokemon";
import { getPokemonTypeColor } from "../../../utils/getColors";
import { Spacer } from "../../Spacer";

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
        }, styles.border]}>
            <Text style={[{
                alignSelf: "flex-start"
            }, styles.border]}>{label}</Text>

            <Spacer size={8}/>
            
            <Badge isDetailed={true} text={text} unitOfMeasure={unitOfMeasure}/>
        </View>
    )
}

export function About({pokemon}:AboutI) {
    return (
        <View style={[styles.container, styles.border]}>
            <Text style={[styles.border]}>Type</Text>

            <Spacer size={16}/>

            <View style={[styles.types, styles.border]}>
                {pokemon.types.map((type, index) => 
                    <Badge color={getPokemonTypeColor(type)} text={type} key={index} isDetailed={true}/>
                )}
            </View>

            <Spacer size={16}/>

            <BadgeLabeled label="Height" text={String(pokemon.height)} unitOfMeasure="mt"/>

            <Spacer size={16}/>

            <BadgeLabeled label="Weight" text={String(pokemon.weight)} unitOfMeasure="kg"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "red",

        borderRadius: 12,
        padding: 16,
    },
    types: {
        width: "100%",

        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    border: {
        // borderColor: "black",
        // borderWidth: 1,
        // borderRadius: 1
    }
});


