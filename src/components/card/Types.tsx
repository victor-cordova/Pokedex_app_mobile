import { View, StyleSheet } from "react-native";
import React from "react";
import { BadgeV2 } from "../Badge";
import { getPokemonTypeColor } from "../../utils/getColors";
import { AXIS, Spacer } from "../Spacer";
import { TEXT_COLORS } from "../../utils/constants";

interface TypesI {
    types: string[]
}

interface BadgeSizedI {
    data: string
}

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
  

export function Types({ types }: TypesI) {
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

const stylesV2 = StyleSheet.create({
    border: {
      // borderColor: "red",
      // borderWidth: 1,
      // borderRadius: 1
    },
    container: {
      height: 152,
      // height: 402,
      width: "100%",
      backgroundColor: TEXT_COLORS.light.background,
      // position: "relative",
      
  
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