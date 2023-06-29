import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { Badge } from "../../Badge";
import { capitalize } from "lodash";
import { AXIS, Spacer } from "../../Spacer";
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
            
            <Spacer size={8} axis={AXIS.Y}/>

            <View style={[styles.abilities, styles.border]}>
                {abilities.map((ability, index) => 
                    <>
                        {index % 2 !== 0 && 
                            <Spacer size={16} axis={AXIS.X} key={index + "ability1"}/>}
                            <Badge 
                                text={capitalize(ability)} 
                                key={index + "ability2"}
                            />
                        
                    </>
                )}

            </View>

            <Spacer size={16} axis={AXIS.Y}/>

            <Text style={[, styles.border]}>Moves</Text>

            <Spacer size={8} axis={AXIS.Y}/>

            <FlatList
                data={moves}
                renderItem={({item, index}) => <Item index={index} item={capitalize(item)}/>}
                numColumns={2}
                keyExtractor={(item, index) => index + "list1"}
                style={[styles.list, styles.border]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // height: "80%",
        // backgroundColor: "red",
        
        padding: 20,
        // borderRadius: 12,
        borderWidth: 1,
        borderColor: "black",
    },
    // badgeContainer: {
    //     width: "100%",
    //     height: 40,

    //     flexDirection: "row",
    // },
    abilities: {
        width: "100%",
        height: 40,

        // justifyContent: "space-evenly",
        flexDirection: "row",
    },
    // abilities: {
    //     flexDirection: "row",
    //     justifyContent: "space-evenly",
    // },
    list: {
        // backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
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