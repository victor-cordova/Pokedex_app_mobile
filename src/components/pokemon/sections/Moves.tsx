import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { Badge } from "../../Badge";
import { capitalize } from "lodash";
import { Spacer } from "../../Spacer";
import { TouchableHighlight } from "react-native-gesture-handler";

interface MovesI {
    abilities: string[],
    moves: string[]
}

interface ItemI {
    item: string,
    index: number,
}

function Item( {item, index} :ItemI) {
    return (
        <View
            style={[styles.moveContainer, styles.border, {
                borderLeftWidth: index%2===0?0:1,
            }]}
        >
            <Text style={[styles.border, styles.moveText]}>{item}</Text>
        </View>
    )
}

export function Moves({abilities, moves}: MovesI) {
    return (
        <View style={[styles.border, styles.container]}>
            <Text style={[styles.border]}>Abilities</Text>
            
            <Spacer size={8}/>

            <View style={[styles.abilities, styles.border]}>
                {abilities.map((ability, index) => 
                    <Badge key={index} isDetailed={true} text={capitalize(ability)}/>    
                )}
            </View>
            <Spacer size={8}/>
            <Text style={[, styles.border]}>Moves</Text>

            <Spacer size={8}/>

            <FlatList
                data={moves}
                renderItem={({item, index}) => <Item index={index} item={capitalize(item)}/>}
                numColumns={2}
                keyExtractor={(item, index) => String(index)}
                style={[styles.list, styles.border]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "red",
        
        padding: 16,
        borderRadius: 12,
    },
    abilities: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    list: {
        backgroundColor: "blue",
        padding: 8,

        borderRadius: 12,
    },
    moveContainer: {
        width: "50%",
        padding: 8,
        borderColor: "white"
    },
    moveText: {
        textAlign: "center",
    },
    border: {
        // borderColor: "blue",
        // borderWidth: 1,
        // borderRadius: 1
}
})