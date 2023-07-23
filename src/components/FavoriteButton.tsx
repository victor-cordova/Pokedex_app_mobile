import { View, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import { FavoriteIcon } from "./icons/FavoriteIcon";
import { TEXT_COLORS } from "../utils/constants";

interface FavoriteButtonI {
    id: number,
    isFocused: boolean,
    handleOnPress: (event: GestureResponderEvent) => void,
  }
  
export function FavoriteButton ({ id, handleOnPress, isFocused }: FavoriteButtonI ) {
    return (
      <View 
        style={{
            position: "absolute",
            right: 16,
            top: 16,
    
            width: 40,
            height: 40,
    
            borderRadius: 20,
            backgroundColor: TEXT_COLORS.light.body,
            borderWidth: 1,

            zIndex: 2,
        }}
      >
        
        <TouchableOpacity
            activeOpacity={0.4} 
            style={[{
                justifyContent: "center",
                alignItems: "center",
    
                width: "100%",
                height: "100%",
                
                }, 
                stylesV2.border
            ]}
            onPress={(event) => handleOnPress(event)} 
        >
          <FavoriteIcon 
            color="white" 
            focused={isFocused} 
            size={24}
          />
        </TouchableOpacity>
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