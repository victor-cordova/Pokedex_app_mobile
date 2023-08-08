import { View, Text, StyleSheet, Image } from "react-native";
import { NEUTRAL_COLORS, TEXT_COLORS } from "../../utils/constants";
import { Pokemon } from "../../types/pokemon";
import { Types } from "./Types";

interface InfoSectionI {
    data: Pokemon
}

export function InfoSection({ data }: InfoSectionI) {
    return (
      <View style={[stylesV2.info, stylesV2.border]}>
      <View style={[stylesV2.text]}>
        
        
        <View style={stylesV2.orderContainer}>
          <Image 
            source={require("../../../assets/icon_pokeball.png")}
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