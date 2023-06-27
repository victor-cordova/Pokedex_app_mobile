import { View, Text, StyleSheet } from "react-native";

interface TypeBadgeI {
    text: string,
    isDetailed: boolean,
    color?: string,
    unitOfMeasure?: string,
}
  
export function Badge({color, text, isDetailed, unitOfMeasure}: TypeBadgeI) {
    return (
        <View style={[styles.badge, styles.border, {
            backgroundColor: color || "#F2F4FA",
            // width: isDetailed? 130: 90,
            // height: isDetailed?40: 30,
        }]}> 
            <Text style={[styles.text, styles.border]}>{text}{unitOfMeasure?` ${unitOfMeasure}`:""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge:  {
        width: "100%",
        height: 40,
        // width: 90,
        

        // marginHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 24,
        // paddingVertical: 5,

        alignItems: "center",
        justifyContent: "center"
        // alignSelf: "center"
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500"
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    }
});