import { StyleSheet, View, Text } from "react-native";
import { Badge } from "../../../Badge";
import { Pokemon } from "../../../../types/pokemon";
import { getPokemonTypeColor } from "../../../../utils/getColors";
import { AXIS, Spacer } from "../../../Spacer";
import React from "react";

interface AboutSectionI {
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

export function AboutSection({pokemon}:AboutSectionI) {
    return (
        <View style={[styles.container, styles.border]}>
            <Text style={[styles.border]}>Type</Text>

            <Spacer size={8} axis={AXIS.Y}/>

            <View style={[styles.badgeContainer, styles.border]}>
                {pokemon.types.map((type, index) => 
                    <React.Fragment key={index + "type0"}>
                        {index % 2 !== 0 && 
                            <Spacer size={16} axis={AXIS.X} key={index + "type1"}/>}
                            <Badge 
                                color={getPokemonTypeColor(type)} 
                                text={type} 
                                key={index + "type2"}
                            />
                        
                    </React.Fragment>
                )}
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


