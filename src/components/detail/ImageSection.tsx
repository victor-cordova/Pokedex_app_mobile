import { View, Text, StyleSheet, Image } from "react-native";
import { Pokemon } from "../../types/pokemon"
import { COLORS, TEXT_COLORS } from "../../utils/constants";

interface ImageSectionI {
    data: Pokemon
}

export function ImageSection({data}: ImageSectionI) {
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