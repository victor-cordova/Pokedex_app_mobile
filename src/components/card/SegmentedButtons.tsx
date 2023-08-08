import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { SECTIONS } from "./SectionHandler";

interface SegmentedButtonsI {
    sectionSelected: SECTIONS,
    switchSection: (section: SECTIONS) => void,
    sections: SECTIONS[]
}

interface ButtonI {
    item: SECTIONS,
}


export function SegmentedButtons({sectionSelected, switchSection, sections}: SegmentedButtonsI) {
    function Button({item}: ButtonI) {
        return (
            <TouchableOpacity 
                style={[styles.border, styles.button, {
                    backgroundColor: item === sectionSelected?"white":"",
                }]}
                
                onPress={() => switchSection(item)} 
            >
                <Text 
                    style={[styles.border, styles.text]}
                >
                    {item}
                </Text>
            </TouchableOpacity>
            
        )
    }

    return (
        <View style={[styles.container]}>
            {sections.map((section, index) => <Button key={index} item={section}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 28,
        backgroundColor: "orange",
        borderColor: "black",
        marginHorizontal: 20,

        alignContent: "center",
        flexDirection: "row"
    },
    button: {
        borderRadius: 28,

        flex: 1,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})