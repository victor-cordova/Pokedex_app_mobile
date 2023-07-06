import { View, Text, StyleSheet } from "react-native";
import { TEXT_COLORS } from "../utils/constants";

interface TypeBadgeI {
    text: string,
    isDetailed?: boolean,
    color?: string,
    unitOfMeasure?: string,
}
  
export function Badge({color, text, isDetailed, unitOfMeasure}: TypeBadgeI) {
    return (
        <View style={[styles.badge, styles.border, {
            backgroundColor: color || "#F2F4FA",
            // width: isDetailed? 130: 90,
            // height: 40,
        }]}> 
            <Text style={[styles.text, styles.border]}>{text}{unitOfMeasure?` ${unitOfMeasure}`:""}</Text>
        </View>
    )
}

export function BadgeV2({color, text, isDetailed, unitOfMeasure}: TypeBadgeI) {
    return (
        <View style={[stylesV2.badge, stylesV2.border, {
            backgroundColor: color || "#F2F4FA",
            // width: isDetailed? 130: 90,
            // height: 40,
        }]}> 
            <Text style={[stylesV2.text, stylesV2.border]}>{text}{unitOfMeasure?` ${unitOfMeasure}`:""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge:  {
        // width: "50%",
        // height: 40,

        // width: 90,
        flex: 1,
        // marginHorizontal: 8,
        

        // marginHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 24,
        // paddingVertical: 5,

        alignItems: "center",
        justifyContent: "center"
        // alignSelf: "center"
    },
    text: {
        // fontSize: 14,
        // lineHeight: 20,
        // fontWeight: "500"
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    }
});

const stylesV2 = StyleSheet.create({
    badge:  {
        // width: "50%",
        // height: 40,

        // width: 90,
        flex: 1,
        // marginHorizontal: 8,
        

        // marginHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 16,
        // paddingVertical: 5,

        alignItems: "center",
        justifyContent: "center"
        // alignSelf: "center"
    },
    text: {
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 16,
        fontWeight: "400",
        color: TEXT_COLORS.light.subhead,
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    }
});