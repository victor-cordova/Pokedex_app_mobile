import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { StatBar } from "../components/StatBar";
import { StyleSheet, View, Image, Text } from "react-native";
import { PokedexStackParamList } from "../types/navigation";
import { Badge } from "./Badge";
// import { StatsI } from "../utils/constants";
import { getPokemonStatColor } from "../utils/getColors";

type NavigatorI = StackScreenProps<PokedexStackParamList, "Pokemon">;
// route
interface DetailedCardI {
    navigator: NavigatorI
}

export function DetailedCard ({navigator}: DetailedCardI) {
//   navigator.route.params.
  
    return (
        <View style={[styles.card, styles.border]}>
            
            <View style={[styles.header, styles.border]}>
                <Image 
                    source={{uri: navigator.route.params.sprite}}
                    // style={{ width: 20, height: 20}}  
                    style={[styles.sprite, styles.border]}
                />

                <Text style={[styles.name, styles.border]}>{navigator.route.params.name}</Text>
                
                <View style={[styles.orderContainer, styles.border]}>
                    <Image 
                        source={require("../../assets/icon-pokeball.png")}
                        style={{ width: 20, height: 20}}  
                        // style={[styles.sprite, styles.border]}
                    />
                    <Text style={[styles.order, styles.border]}>
                        {`${navigator.route.params.order}`.padStart(4, "0")}
                    </Text>
                </View>
            </View>

            <View style={[styles.types, styles.border]}>
                {navigator.route.params.types.map(type => <Badge type={type}/>)}
            </View>
            
            <View style={[styles.border]}>
                

            {/* <View style={[styles.types, styles.border]}>
                {pokemon.types.map(type => <Badge type={type}/>)}
            </View> */}
            {navigator.route.params.stats.map(stat => <StatBar key={stat.name} color={getPokemonStatColor(stat.name)} stat={stat.stat}/>)}
            
            {/* {pokemon.type} */}
            </View>
            {/* <View style={[styles.imgContainer, styles.border]}> */}
            {/* <Image source={{uri: navigator.route.params.sprite}} style={[styles.sprite, styles.border]}/> */}
            {/* </View> */}
        
        </View>    
    )
}

const styles = StyleSheet.create({
    card: {
        // height: 130,
        width: "90%",

        // ,
        padding: 20,
    
        alignSelf: "center",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    
        // borderColor: "black",
        // borderWidth: 1,
        // borderRadius: 15,
        margin: 20,
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
      header: {
  
      },
      types: {
        flexDirection: "row",
        // alignSelf: "center"
      },
      border: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 1
      }
})