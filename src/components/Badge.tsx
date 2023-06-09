import { View, Text, StyleSheet } from "react-native";
import { getPokemonTypeColor } from "../utils/getColors";

interface TypeBadgeI {
    type: string, 
    // color: string,
}
  
export function Badge({type}: TypeBadgeI) {
    return (
        <View style={[styles.badge, styles.border, {
            backgroundColor: getPokemonTypeColor(type)
            // backgroundColor: getPokemonColor(type)
        }]}> 
            <Text style={styles.border}>{type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge:  {
        width: 80,
        alignItems: "center",

        marginRight: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,

        padding: 5,
        // paddingHorizontal: 5,
        // paddingVertical: 5,
        // marginVertical: 10,
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    }
});