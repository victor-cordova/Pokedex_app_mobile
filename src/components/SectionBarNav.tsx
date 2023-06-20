import { StyleSheet, View, Text, FlatList } from "react-native";

export enum SECTIONS {
    ABOUT = "about",
    STATS = "stats",
    MOVES = "moves",
}

interface SectionBarNavI {
    sectionSelected: SECTIONS,
    switchSection: (section: SECTIONS) => void,
    sections: SECTIONS[]
}

interface RenderFunctionI {
    item: SECTIONS,
    onPress: (section: SECTIONS) => void
}


export function SectionBarNav({sectionSelected, switchSection, sections}: SectionBarNavI) {
    function RenderFunction({item, onPress}: RenderFunctionI) {
        return (
            <View style={[styles.list, styles.border]}>
                <Text 
                    onPress={() => onPress(item)} 
                    style={[styles.list, styles.border, {
                        backgroundColor: item === sectionSelected?"blue":"red"
                    }]}
                >
                    {item}
                </Text>
            </View>
            
        )
    }
    return (
        <FlatList
            data={sections}
            renderItem={({item})=> <RenderFunction item={item} onPress={switchSection}/>}
            keyExtractor={(item, index) => String(index)}
            horizontal={true}
            // contentContainerStyle={[styles.list, styles.border]}
            style={[styles.list, styles.border]}
            // extraData={selectedId}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        // bac
    },
    border: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 1
    },
})