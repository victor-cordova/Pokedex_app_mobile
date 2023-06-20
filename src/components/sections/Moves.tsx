import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { Badge } from "../Badge";

interface MovesI {
    abilities: string[],
    moves: string[]
}

interface RenderThisI {
    move: string
}

function RenderThis( {move} :RenderThisI) {
    return (
        <Text style={[styles.border, {
            width: "50%",
            // fom
            // fontStyle: ""
            textAlign: "center"
        }]}>{move}</Text>
    )
}

export default function Moves({abilities, moves}: MovesI) {
    return (
        <View style={[styles.border, {
            // height: "100%",
            width: "100%"
            // flex: 
        }]}>
            <Text style={{
                fontSize: 16,
                fontWeight: "bold",

                marginBottom: 10,
            }}>Abilities</Text>
            <View style={[styles.types, styles.border]}>
                {abilities.map((ability, index) => 
                    // <Text key={index}>{ability}</Text>
                    <Badge key={index} isDetailed={true} text={ability}/>    
                )}
            </View>
            <Text style={{
                fontSize: 16,
                fontWeight: "bold",

                marginBottom: 10,
            }}>Moves</Text>
            {/* <View style={[styles.types, styles.border]}>
                {moves.map((move, index) => 
                    <Text>{move}</Text>
                    // <Badge key={index} isDetailed={true} text={ability}/>    
                )}
                
                    
                
            </View> */}
            <FlatList
                data={moves}
                renderItem={({item}) => <RenderThis move={item}/>}
                numColumns={2}
                keyExtractor={(item, index) => String(index)}
                style={[styles.moves, styles.border, {
                    // height: 200,
                    // flex: 1
                }]}
                contentContainerStyle={{
                    // alignItems: "center",
                    // alignContent: "center"
                    // justifyContent: "center"
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    types: {
        flexDirection: "row",
        // justifyContent: "center"
        // alignSelf: "center"
    },
    moves: {
        // borderColor: "",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,

        // alignItems: "center",
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
}
})