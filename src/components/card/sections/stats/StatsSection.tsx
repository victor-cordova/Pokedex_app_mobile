import { StyleSheet, View, Image, Text } from "react-native";
import { StatBar } from "./StatBar";

import { STATS } from "../../../../utils/constants";
import { getPokemonStatColor } from "../../../../utils/getColors";
import { Pokemon } from "../../../../types/pokemon";
import { AXIS, Spacer } from "../../../Spacer";

interface StatsSectionI {
    pokemon: Pokemon
}

interface BarLabeledI {
    stat: number,
    label: STATS,
    index: number,
}

function BarLabeled({index, label, stat}: BarLabeledI) {
    const max = label === STATS.EXP?1000: 300;
    const percent = Math.round((stat / max) * 100);

    return (
        <View style={[styles.bar, styles.border]}>
            <Spacer size={16} axis={AXIS.Y}/>

            <View style={[styles.textContainer, styles.border]}>
                <Text style={[styles.text, styles.border]}>{label}</Text>
                <Text>{percent} %</Text>
            </View>

            <Spacer size={8} axis={AXIS.Y}/>
            
            <StatBar key={index} color={getPokemonStatColor(label)} stat={stat} max={label === STATS.EXP?1000: 300}/>
        </View>
        
    )
}

export function StatsSection({ pokemon }: StatsSectionI) {
    return (
        <View style={[styles.border, styles.container]}>
            {pokemon.stats.map((stat, index) => <BarLabeled key={index} index={index} label={stat.name} stat={stat.stat}/>)}
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingBottom: 20,
        paddingHorizontal: 20,
        // backgroundColor: "red",
        // borderRadius: 12,
        borderWidth: 1,
        borderColor: "black"
    },

    bar: {
        width: "100%",

        justifyContent: "center"
    },
    textContainer: {
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {

    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})