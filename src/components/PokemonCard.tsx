import { View, Text, FlatList, StyleSheet, StatusBar, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pokemon } from "../types/pokemon";

interface PokemonCardI {
    pokemon: Pokemon,
    onPress: (pokemon: Pokemon) => void,
}

export function PokemonCard ({ pokemon, onPress }: PokemonCardI) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)}>
      <View style={[styles.card, styles.border]}>
        <View style={[styles.spacing, styles.border]}>
        <Image source={{uri: pokemon.sprite}} style={[styles.sprite, styles.border]}/>
          <View style={[styles.bgStyles, styles.border]}>
            
            <Text style={[styles.name, styles.border]}>{pokemon.name}</Text>
            <Text style={[styles.order, styles.border]}>
              {`${pokemon.order}`}
            </Text>
          </View>
          
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    card: {
        height: 120,
        width: 130,
        backgroundColor: "white",
        // marginHorizontal: "auto",
        marginVertical: 10,

      
        flex: 1,
    },
    spacing: {
      padding: 5,
      
      flex: 1,
      justifyContent: "space-between"

    },
    bgStyles: {
      height: 30,
      // top: 0,
      // overflow: "scroll",
      // position: "relative",
      // flex: 1,
      backgroundColor: "grey",
      flexDirection: "row",
      paddingHorizontal: 4,
      
      // alignContent: "center",
      alignItems: "center",
      justifyContent: "space-between"
    },
    order: {
      color: "#fff",
      fontSize: 11,
      // marginRight: 10
      // flex:
      // alignSelf: "c"
      // alignContent: "center"

        // position: "absolute",
        // right: 10,
        // top: 10,
    },
    name: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        // paddingTop: 10
    },
    sprite: { 
        width: 90, 
        height: 90,

        // position: "absolute",
        alignSelf: "flex-end",
        bottom: -10,
        zIndex: 2,
        right: -10
    },
    border: {
      // borderColor: "red",
      // borderWidth: 1,
      // borderRadius: 1
    }
});