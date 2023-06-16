import { StyleSheet, View, Image, Text } from "react-native";
import { Badge } from "./Badge";

interface MovesI {
    abilities: string[],
}

function Moves({abilities}: MovesI) {
    return (
        <View>
            <Text style={{
                fontSize: 16,
                fontWeight: "bold",

                marginBottom: 10,
            }}>Abilities</Text>
            <View style={[styles.types, styles.border]}>
                {abilities.map((ability, index) => 
                    <Badge key={index} isDetailed={true} text={ability}/>    
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    types: {
        flexDirection: "row",
        // justifyContent: "center"
        // alignSelf: "center"
    },
    border: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 1
}
})