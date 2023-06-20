import { StyleSheet, View, Image, Text } from "react-native";
import { StatBar } from "../StatBar";

import { STATS } from "../../utils/constants";
import { getPokemonStatColor } from "../../utils/getColors";
import { Pokemon } from "../../types/pokemon";

interface StatsI {
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
        <View style={[{
            height: 60,
            width: "100%",
            // backgroundColor: "white",

            // flexDirection:'row',
            // alignItems: "center"
            justifyContent: "center"
            // alignItems: "center"
          }, styles.border]}>
            <View style={[{
            // height: 30,
            // width: "100%",
            // backgroundColor: "white",

            flexDirection:'row',
            alignItems: "center",
            justifyContent: "space-between"
            // justifyContent: "center"
            // alignItems: "center"
          }, styles.border]}>
                <Text style={[{
                    width: 40
                }, styles.border]}>{label}</Text>
                <Text>{percent} %</Text>
            </View>
            
            <StatBar key={index} color={getPokemonStatColor(label)} stat={stat} max={label === STATS.EXP?1000: 300}/>
        </View>
        
    )
}

export default function Stats({ pokemon }: StatsI) {
    return (
        <View style={[styles.border, {
            width: "100%",
            marginTop: 10,
        }]}>
            {pokemon.stats.map((stat, index) => <BarLabeled index={index} label={stat.name} stat={stat.stat}/>)}
        </View>
    )    
}

const styles = StyleSheet.create({
    border: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 1
    }
})