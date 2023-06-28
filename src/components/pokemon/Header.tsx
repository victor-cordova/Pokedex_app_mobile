import { StyleSheet, View, Image, Text } from "react-native";
import { Pokemon } from "../../types/pokemon";
import { AXIS, Spacer } from "../Spacer";

interface HeaderI {
    pokemon: Pokemon,
}

export default function Header( {pokemon}: HeaderI) {
    return (
        <View style={[styles.header, styles.border]}>
            <Image 
                source={{uri: pokemon.sprite}} 
                style={[styles.sprite, styles.border]}
            />

            <Spacer size={16} axis={AXIS.Y}/>

            <Text style={[styles.name, styles.border]}>{pokemon.name}</Text>

            <Spacer size={4} axis={AXIS.Y}/>

            <View style={[styles.orderContainer, styles.border]}>
                <Image 
                    source={require("../../../assets/icon-pokeball.png")}
                    style={[styles.icon, styles.border]}  
                />
                
                <Text style={[styles.order, styles.border]}>
                    {" " + `${pokemon.order}`.padStart(4, "0")}
                </Text>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },

    header: {
        width: "100%",

        alignItems: "center"
        // marginBottom: 10,
    },
    sprite: { 
        width: 200, 
        height: 200,
    },
    name: {
        // fontSize: 20,
        // color: "#fff",
        // fontWeight: "bold",
    },
    orderContainer: {
        flexDirection:'row',
        alignItems: "center"
    },
    order: {
        // color: "#fff",
        // fontSize: 13,
    },
    

    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})