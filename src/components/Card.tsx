import { View, Text, FlatList, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pokemon } from "../types/pokemon";
import { Badge } from "./Badge";
import { getPokemonTypeColor } from "../utils/getColors";

// import iconPokeball from "../../assets/icon-pokeball";

interface CardI {
  pokemon: Pokemon,
  onPress: (pokemon: Pokemon) => void,
}

interface TypeListI {
  types: string[]
}

function TypeList({ types }: TypeListI) {
  return (
    <View style={[styles.typesList, styles.border]}>
      {types.map((type, index) => <Badge isDetailed={false} key={index} text={type} color={getPokemonTypeColor(type)}/>)}
    </View>
  )
}

export function Card ({ pokemon, onPress }: CardI) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={[styles.card, styles.border]}>
        <View style={[styles.info, styles.border]}>
          <View style={styles.text}>
            <View style={styles.orderContainer}>
              <Image 
                source={require("../../assets/icon-pokeball.png")}
                style={styles.icon}  
              />
              <Text style={[styles.order, styles.border]}>
                {`${pokemon.order}`.padStart(4, "0")}
              </Text>
            </View>

            <Text style={[styles.name, styles.border]}>{pokemon.name}</Text>
          </View>

          <TypeList types={pokemon.types}/>
        </View>
          <Image source={{uri: pokemon.sprite}} style={[styles.sprite, styles.border]}/>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    card: {
      height: 130,
      width: "100%",
      padding: 10,
  
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
  
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 20,
    },
    orderContainer: {
      flexDirection:'row'
    },
    info: {
      height: "100%",
      width: 220,

      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      

      paddingHorizontal: 10,
      
      justifyContent: "space-between"
    },
    order: {
      color: "#fff",
      fontSize: 11,

      marginLeft: 5,
    },
    name: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
    },
    icon: { 
      width: 20, 
      height: 20,
    },
    sprite: { 
        width: 90, 
        height: 90,

        // flex: 1
    },
    text: {

    },
    typesList: {
      width: "100%",

      justifyContent: "space-between",

      flexDirection: "row",

      // alignSelf: "center"
    },
    border: {
      // borderColor: "red",
      // borderWidth: 1,
      // borderRadius: 1
    }
});