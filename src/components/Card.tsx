import { View, Text, FlatList, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pokemon } from "../types/pokemon";
import { Badge } from "./Badge";
import { getPokemonTypeColor } from "../utils/getColors";
import { AXIS, Spacer } from "./Spacer";
import { FavoriteIcon } from "./icons/Favorite";

// import iconPokeball from "../../assets/icon-pokeball";

interface CardI {
  pokemon: Pokemon,
  onPress: (pokemon: Pokemon) => void,
}

interface TypesI {
  types: string[]
}

interface BadgeSizedI {
  data: string
}

function BadgeSized({ data }: BadgeSizedI) {
  return (
    <View style={[stylesV2.border, stylesV2.badgeContainerV2]}>
      <Badge 
        color={getPokemonTypeColor(data)} 
        text={data} 
        // isDetailed={true}
      />
    </View>
  )
}


function Types({ types }: TypesI) {
  return (
    <View style={[{
      width: "100%",
      // backgroundColor: "white",
      // padding: 8,
      // borderRadius: 12,

      justifyContent: "flex-end",
      // alignItems: "center"
    }, styles.border]}>

      {types.map((type, index) => 
        <>
          {index % 2 !== 0 && 
            <Spacer size={12} axis={AXIS.Y} key={index + "card1"}/>}
            
            <BadgeSized data={type} key={index + "card2"}/>
        </>
      )}
    </View>
  )
}

export function CardV2 ({ pokemon, onPress }: CardI) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={[stylesV2.container, stylesV2.border]}>
        <View style={[stylesV2.info, stylesV2.border]}>
          <View style={[stylesV2.text]}>
            
            
            <View style={stylesV2.orderContainer}>
              <Image 
                source={require("../../assets/icon-pokeball.png")}
                style={stylesV2.icon}  
              />

              <Text style={[stylesV2.order, stylesV2.border, {
                // fontSize: 12
              }]}>
                {" " + `${pokemon.order}`.padStart(4, "0")}
              </Text>
            </View>
          </View>

          <Types types={pokemon.types}/>
        </View>

        {/* <Spacer axis={AXIS.X} size={16}/> */}
        
        <View style={[{
          // width: "50%",
          backgroundColor: "white",
          height: "100%",
          borderRadius: 12,
          // minWidth: 132,
          // borderBottomEndRadius: 12,

          flex: 2,
          alignItems: "center",
          justifyContent: "center"
        }, stylesV2.border]}>
          <Image source={{uri: pokemon.sprite}} style={[stylesV2.sprite, stylesV2.border]}/>
          
          <Spacer axis={AXIS.Y} size={8}/>

          <Text 
            style={[stylesV2.name, stylesV2.border, {
              // alignSelf: "flex-start",
              // marginLeft: 16,
            }]}
          >
            {pokemon.name}
          </Text>
        </View>

        {/* <Spacer axis={AXIS.X} size={16}/> */}

        <View style={[{
          // alignSelf: "flex-start",
          position: "absolute",
          right: 16,
          top: 16,
        }, stylesV2.border]}>
          <FavoriteIcon color="white" focused={false} size={20}/>
        </View>
        

        {/* // Supongamos que hay una variable llamada pixelar que es true o false */}
        
    </TouchableOpacity>
  )
};

export function CardV3 ({ pokemon, onPress }: CardI) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={[stylesV2.container, stylesV2.border]}>
        <View style={[stylesV2.info, stylesV2.border]}>
          <View style={[stylesV2.text]}>
            
            
            <View style={stylesV2.orderContainer}>
              <Image 
                source={require("../../assets/icon-pokeball.png")}
                style={stylesV2.icon}  
              />

              <Text style={[stylesV2.order, stylesV2.border, {
                // fontSize: 12
              }]}>
                {" " + `${pokemon.order}`.padStart(4, "0")}
              </Text>
            </View>
          </View>

          <Types types={pokemon.types}/>
        </View>

        {/* <Spacer axis={AXIS.X} size={16}/> */}
        
        {/* <View style={[{
          // width: "50%",
          backgroundColor: "white",
          height: "100%",
          borderRadius: 12,
          // minWidth: 132,
          // borderBottomEndRadius: 12,

          flex: 2,
          alignItems: "center",
          justifyContent: "center"
        }, stylesV2.border]}>
          <Image source={{uri: pokemon.sprite}} style={[stylesV2.sprite, stylesV2.border]}/>
          
          <Spacer axis={AXIS.Y} size={8}/>

          <Text 
            style={[stylesV2.name, stylesV2.border, {
              // alignSelf: "flex-start",
              // marginLeft: 16,
            }]}
          >
            {pokemon.name}
          </Text>
        </View> */}
        <View
          style={{
            // width: "50%",
            backgroundColor: "white",
            height: "100%",
            borderRadius: 12,
            // minWidth: 132,
            // borderBottomEndRadius: 12,
  
            flex: 2,
            // alignItems: "center",
            // justifyContent: "center"
          }}
          >
            <ImageBackground 
              resizeMode="cover" 
              // imageStyle={{
                
              // }}
              source={{uri: 'https://legacy.reactjs.org/logo-og.png'}} 
              style={{  
                flex: 1,
                
              }}
            />
    
        </View>

        {/* <Spacer axis={AXIS.X} size={16}/> */}

        <View style={[{
          // alignSelf: "flex-start",
          position: "absolute",
          right: 16,
          top: 16,
        }, stylesV2.border]}>
          <FavoriteIcon color="white" focused={false} size={20}/>
        </View>
        

        {/* // Supongamos que hay una variable llamada pixelar que es true o false */}
        
    </TouchableOpacity>
  )
};





export function Card ({ pokemon, onPress }: CardI) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={[styles.container, styles.border]}>
        <View style={[styles.info, styles.border]}>
          <View style={[styles.text]}>
            <Text style={[styles.name, styles.border, {
              // fontSize: 24
            }]}>{pokemon.name}</Text>
            
            <View style={styles.orderContainer}>
              <Image 
                source={require("../../assets/icon-pokeball.png")}
                style={styles.icon}  
              />

              <Text style={[styles.order, styles.border, {
                fontSize: 12
              }]}>
                {" " + `${pokemon.order}`.padStart(4, "0")}
              </Text>
            </View>
          </View>

          <Types types={pokemon.types}/>
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
      width: 180,

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
    },
    name: {
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

const stylesV2 = StyleSheet.create({
  border: {
    // borderColor: "red",
    // borderWidth: 1,
    // borderRadius: 1
  },
  container: {
    height: 180,
    width: "100%",
    // padding: 16,
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
    padding: 16,

    // width: "50%",
    flex: 3,

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
    fontSize: 12,
  },
  name: {
  },
  icon: { 
    width: 20, 
    height: 20,
  },
  sprite: { 
      width: 92, 
      height: 92,

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
    width: "70%",
    height: 40,

    flexDirection: "row",
  },

});




// import React from "react";
// import { ImageBackground, Text, View } from "react-native";

// const App = () => (
//   <View style={{ flex: 1 }}>
//     <ImageBackground source={{ uri: "https://via.placeholder.com/500" }} style={{ flex: 1, transform: [{ scale: 3 }], alignItems: "center", justifyContent: "center" }} imageStyle={{ imageRendering: pixelar ? "pixelated" : "auto" }}>
//       {/* Aquí va el contenido del View */}
//       <Text>Hola Mundo</Text>
//     </ImageBackground>
//   </View>
// );

// export default App;