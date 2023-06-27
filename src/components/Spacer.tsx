import { View } from "react-native";

interface SpacerI{
    size: number
}

export function Spacer({size}: SpacerI) {
    return (
        <View style={{
            width: "100%",
            height: size
        }}></View>
    )
}