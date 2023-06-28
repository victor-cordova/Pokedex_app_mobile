import { StyleSheet, View, Text } from "react-native";
import { Badge } from "../../Badge";
import { Pokemon } from "../../../types/pokemon";
import { getPokemonTypeColor } from "../../../utils/getColors";
import { AXIS, Spacer } from "../../Spacer";

interface AboutI {
    pokemon: Pokemon
}

interface MeasurableBadgeI {
    label: string,
    text: string,
    unitOfMeasure: string,
}

function MeasurableBadge({ label, text, unitOfMeasure }: MeasurableBadgeI) {
    return (
        <>
            <Text style={[{
            }, styles.border]}>{label}</Text>

            <Spacer size={8} axis={AXIS.Y}/>

            <View style={styles.badgeContainer}>
                <Badge isDetailed={true} text={String(text)} unitOfMeasure={unitOfMeasure}/>
            </View>
        </>
    )
}

export function About({pokemon}:AboutI) {
    return (
        <View style={[styles.container, styles.border]}>
            <Text style={[styles.border]}>Type</Text>

            <Spacer size={8} axis={AXIS.Y}/>

            <View style={[styles.badgeContainer, styles.border]}>
                <Badge color={getPokemonTypeColor(pokemon.types[0])} text={pokemon.types[0]} isDetailed={true}/>
                {pokemon.types.length === 2 && 
                    <>
                        <Spacer size={16} axis={AXIS.X}/>

                        <Badge color={getPokemonTypeColor(pokemon.types[1])} text={pokemon.types[1]} isDetailed={true}/>
                    </>
                }
            </View>

            <Spacer size={16} axis={AXIS.Y}/>

            <MeasurableBadge label="Height" text={String(pokemon.height)} unitOfMeasure="mt"/>

            <Spacer size={16} axis={AXIS.Y}/>

            <MeasurableBadge label="Weight" text={String(pokemon.weight)} unitOfMeasure="kg"/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        // borderRadius: 12,
        padding: 20,
    },
    badgeContainer: {
        width: "100%",
        height: 40,

        flexDirection: "row",
    },
    border: {
        // borderColor: "black",
        // borderWidth: 1,
        // borderRadius: 1
    }
});


