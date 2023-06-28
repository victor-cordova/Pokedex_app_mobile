import { View, Text, FlatList, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pokemon } from "../types/pokemon";
import { Badge } from "./Badge";
import { getPokemonTypeColor } from "../utils/getColors";
import { AXIS, Spacer } from "./Spacer";

// import iconPokeball from "../../assets/icon-pokeball";

interface CardI {
  pokemon: Pokemon,
  onPress: (pokemon: Pokemon) => void,
}

interface TypesI {
  types: string[]
}

function Types({ types }: TypesI) {
  return (
    // <View style={[styles.typesList, styles.border]}>
    //   {types.map((type, index) => <Badge isDetailed={false} key={index} text={type} color={getPokemonTypeColor(type)}/>)}
    // </View>
    <View style={[styles.badgeContainer, styles.border]}>
      <Badge 
        color={getPokemonTypeColor(types[0])} 
        text={types[0]} 
        isDetailed={true}
      />
      {types.length === 2 && 
        <>
            <Spacer size={12} axis={AXIS.X}/>

            <Badge color={getPokemonTypeColor(types[1])} text={types[1]} isDetailed={true}/>
        </>
      }
    </View>
  )
}

function TypesV2({ types }: TypesI) {
  return (
    // <View style={[styles.typesList, styles.border]}>
    //   {types.map((type, index) => <Badge isDetailed={false} key={index} text={type} color={getPokemonTypeColor(type)}/>)}
    // </View>
    <View style={[{
      width: "100%",
      height: 92,

      // alignSelf: "flex-end"

      // flexDirection: "row",
    }, styles.border]}>
      <View style={{
        width: "100%",
        height: 40,
      }}>
        <Badge 
          color={getPokemonTypeColor(types[0])} 
          text={types[0]} 
          isDetailed={true}
        />
      </View>
      
      {types.length === 2 && 
        <>
            <Spacer size={12} axis={AXIS.Y}/>
            <View style={{
              width: "100%",
              height: 40,
            }}>
              <Badge color={getPokemonTypeColor(types[1])} text={types[1]} isDetailed={true}/>
            </View>
        </>
      }
    </View>
  )
}

export function Card ({ pokemon, onPress }: CardI) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={[styles.container, styles.border]}>
        <View style={[styles.info, styles.border]}>
          <View style={[styles.text]}>
            <Text style={[styles.name, styles.border, {
              fontSize: 24
            }]}>{pokemon.name}</Text>
            
            <View style={styles.orderContainer}>
              <Image 
                source={require("../../assets/icon-pokeball.png")}
                style={styles.icon}  
              />

              <Text style={[styles.order, styles.border, {
                fontSize: 12
              }]}>
                {`${pokemon.order}`.padStart(4, "0")}
              </Text>
            </View>
          </View>

          <TypesV2 types={pokemon.types}/>
        </View>

        <Image source={{uri: pokemon.sprite}} style={[styles.sprite, styles.border]}/>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    container: {
      height: 202,
      width: "100%",
      padding: 12,
      backgroundColor: "green",
  
      flexDirection: "row",
      // alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-between",
  
      // borderColor: "black",
      // borderWidth: 1,
      borderRadius: 12,
      marginBottom: 16,
    },

    info: {
      height: "100%",
      width: 160,

      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      
      // flexDirection: "column",
      // paddingHorizontal: 10,
      
      justifyContent: "space-between"
    },

    orderContainer: {
      flexDirection:'row'
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
        width: 140, 
        height: 140,

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
    badgeContainer: {
      width: "100%",
      height: 40,

      flexDirection: "row",
    },
    badgeContainerV2: {
      width: "100%",
      height: 40,

      flexDirection: "row",
    },
    border: {
      // borderColor: "red",
      // borderWidth: 1,
      // borderRadius: 1
    }
});