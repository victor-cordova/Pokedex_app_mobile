import { View } from "react-native";

export enum AXIS {
    "X" = "x",
    "Y" = "y",
}

interface SpacerI{
    size: number,
    axis: AXIS
}

export function Spacer({size, axis}: SpacerI) {
    return (
        <View style={{
            // width: "100%",
            // height: size
            width: axis === AXIS.X? size: 0,
            height: axis === AXIS.Y? size: 0,
        }}></View>
    )
}