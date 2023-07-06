import { View, Text, FlatList, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pokemon } from "../types/pokemon";
import { Badge, BadgeV2 } from "./Badge";
import { getPokemonTypeColor } from "../utils/getColors";
import { COLORS, COLORS_SCHEME, NEUTRAL_COLORS, TEXT_COLORS } from "../utils/constants";
import { AXIS, Spacer } from "./Spacer";
import { FavoriteIcon } from "./icons/Favorite";
import {Appearance} from "react-native";
import React from "react";

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

interface SectionI {
  data: Pokemon
}

import { useColorScheme } from 'react-native';

const themeColors = {
  light: {
    background: 'white',
    text: 'black',
  },
  dark: {
    background: 'black',
    text: 'white',
  },
};

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = themeColors[colorScheme];
  return colors;
};

function BadgeSizedV2({ data }: BadgeSizedI) {
  return (
    <View style={[stylesV2.border, {
      height: 40,
      // width: 100,
    }]}>
      <BadgeV2 
        color={getPokemonTypeColor(data)} 
        text={data} 
        // isDetailed={true}
      />
    </View>
  )
}

function ImageSection({data}: SectionI) {
  return (
    <View style={[{
      // width: "50%",
      flex: 2,
      alignItems: "center",
      
      height: "100%",

      backgroundColor: data.color,
      borderRadius: 12,
    }, stylesV2.border]}>
      <Image source={{uri: data.sprite}} style={[stylesV2.sprite, , {
        width: "88%",
        height: "80%",
        resizeMode: "contain",
      }]}/>

      <View
        style={[, stylesV2.border, {
          position: "absolute",
          bottom: 0,

          width: "100%",
          padding: 4,
          
          borderBottomRightRadius: 12,
          borderBottomLeftRadius: 12,
          backgroundColor: COLORS.gray,
        }]}
      >
        <Text 
          selectionColor={TEXT_COLORS.light.title}
          accessibilityIgnoresInvertColors={true}
          
          style={[, stylesV2.border, {
            // Title small
            fontWeight: "500",
            textAlign: "center",
            fontSize: 14, 
            lineHeight: 20,
            fontFamily: "Roboto",
          }]}
        >
          {data.name}
        </Text>
      </View>
    </View>
  )
}

function InfoSection({data}: SectionI) {
  return (
    <View style={[stylesV2.info, stylesV2.border]}>
    <View style={[stylesV2.text]}>
      
      
      <View style={stylesV2.orderContainer}>
        <Image 
          source={require("../../assets/icon-pokeball.png")}
          style={stylesV2.icon}  
        />

        <Text 
          selectionColor={NEUTRAL_COLORS.black}
          style={[stylesV2.order, stylesV2.border, {
          //label small, but needs to add style when traking the card.
          fontSize: 11,
          lineHeight: 16,
          fontWeight: "500",

          fontFamily: "Roboto",
          color: TEXT_COLORS.light.subhead,
          // md.sys.typescale.label-small.tracking	-	0.5
        }]}>
          {" " + `${data.order}`.padStart(4, "0")}
        </Text>
      </View>
    </View>

    <Types types={data.types}/>
  </View>
  )
}

function FavoriteButton() {
  return (
    <TouchableOpacity 
      style={[{
        position: "absolute",
        right: 16,
        top: 16,
        }, 
        stylesV2.border]
      }
      // onPress={addFavorite}  
    >
      <FavoriteIcon color="white" focused={false} size={20}/>
    </TouchableOpacity>
  )
}

function Types({ types }: TypesI) {
  return (
    <View style={[{
      width: "100%",

      flexDirection: "row",
    }, stylesV2.border]}>

      {types.map((type, index) => 
        <React.Fragment key={index + "card0"}>
          {index % 2 !== 0 && 
            <Spacer size={8} axis={AXIS.X} key={index + "card1"}/>}
            
            <BadgeSizedV2 data={type} key={index + "card2"}/>
        </React.Fragment>
      )}
    </View>
  )
}

export function Card ({ pokemon, onPress }: CardI) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={[stylesV2.container, stylesV2.border, {
      // height: 152,
      
    }]}>
      <ImageSection data={pokemon}/>
        
      <InfoSection data={pokemon}/>

      <FavoriteButton />
    </TouchableOpacity>
  )
};

const stylesV2 = StyleSheet.create({
  border: {
    // borderColor: "red",
    // borderWidth: 1,
    // borderRadius: 1
  },
  container: {
    height: 152,
    width: "100%",
    backgroundColor: TEXT_COLORS.light.title,
    

    flexDirection: "row",
    // alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",

    // borderColor: "black",
    // borderWidth: 1,
    borderRadius: 12,
    marginBottom: 8,
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
    // fontSize: 12,
  },
  name: {
  },
  icon: { 
    width: 20, 
    height: 20,
  },
  sprite: { 

    // width: "100%", 
    // height: "auto",

    // resizeMode: "contain"

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
  }
});