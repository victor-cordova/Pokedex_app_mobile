import { View, Text, FlatList, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pokemon } from "../types/pokemon";
import { Badge } from "./Badge";
// import iconPokeball from "../../assets/icon-pokeball";

interface CardI {
    pokemon: Pokemon,
    onPress: (pokemon: Pokemon) => void,
}

export function Card ({ pokemon, onPress }: CardI) {

  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={[styles.card, styles.border]}>
        <View style={[styles.info, styles.border]}>
          <View style={styles.text}>
            <View style={styles.orderContainer}>
              <Image 
                source={require("../../assets/icon-pokeball.png")}
                style={{ width: 20, height: 20}}  
              />
              <Text style={[styles.order, styles.border]}>
                {`${pokemon.order}`.padStart(4, "0")}
              </Text>
            </View>

            <Text style={[styles.name, styles.border]}>{pokemon.name}</Text>
          </View>

          <View style={[styles.types, styles.border]}>
            {pokemon.types.map(type => <Badge type={type}/>)}
          </View>
          
          {/* {pokemon.type} */}
        </View>
        {/* <View style={[styles.imgContainer, styles.border]}> */}
          <Image source={{uri: pokemon.sprite}} style={[styles.sprite, styles.border]}/>
        {/* </View> */}
        
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
      width: 200,
      // backgroundColor: "grey",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      

      paddingHorizontal: 10,
      
      // alignSelf: "flex-start",

      // flexDirection: "c",
      // alignItems: "center",
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
    // imgContainer: {
    //   // height: 90,
    //   // width: 90,
    //   // hei

    //   flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   // alignContent: "center"
    // },
    sprite: { 
      // height: 60,
      // width: 90,
        width: 90, 
        height: 90,
        // transform: "translateY(50%)",

        // flex: 1,
        alignSelf: "flex-end",
    },
    text: {

    },
    types: {
      flexDirection: "row",
      // alignSelf: "center"
    },
    border: {
      // borderColor: "red",
      // borderWidth: 1,
      // borderRadius: 1
    }
});