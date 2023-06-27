import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { SECTIONS } from "./SectionHandler";

interface SegmentedButtonsI {
    sectionSelected: SECTIONS,
    switchSection: (section: SECTIONS) => void,
    sections: SECTIONS[]
}

interface RenderFunctionI {
    item: SECTIONS,
    // onPress: (section: SECTIONS) => void,
    // length: number,
    index: number,
}


export function SegmentedButtons({sectionSelected, switchSection, sections}: SegmentedButtonsI) {
    const lastPosition = sections.length - 1;

    function RenderFunction({item, index}: RenderFunctionI) {
        return (
            <TouchableOpacity 
                style={[styles.border, {
                    flex: 1,
                    // width: "100%",
                    // height: "100%",
                    // alignSelf: "center",
                    justifyContent: "center",
                    // borderRadius: 28,
                    borderTopRightRadius: index === lastPosition?28:0,
                    borderBottomRightRadius: index === lastPosition?28:0,
                    borderTopLeftRadius: index === 0?28:0,
                    borderBottomLeftRadius: index === 0?28:0,
                    // borderBottomEndRadius: 28,
                    // backgroundColor: "red",
                    // padding: 20,
                    borderColor: "black",
                    // borderWidth: index === 0,
                    borderWidth: 1,
                    // t,
                    
                    backgroundColor: item === sectionSelected?"blue":"",
                    // height: 300
                }]}
                
                onPress={() => switchSection(item)} 
            >
                <Text 
                    
                    style={[styles.border, {
                        textAlign: "center"    
                    }]}
                >
                    {item}
                </Text>
            </TouchableOpacity>
            
        )
    }
    return (
        <View style={{
            // flex: 1,
            height: 60,
            // padding: 12,
            width: "100%",
            borderRadius: 28,
            // backgroundColor: "orange",
            // padding: 20,
            // borderWidth: 0.5,
            borderColor: "black",

            // alignItems: "center",
            // justifyContent: "center",
            alignContent: "center",
            flexDirection: "row"
        }}>
            {sections.map((section, index) => <RenderFunction index={index} key={index} item={section}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        // flex: 1,
        // width: "100%",
        // height: 40,

        // alignItems: "stretch"
        // justifyContent: "center"
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})