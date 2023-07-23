import { View, Text, SafeAreaView } from "react-native";
import { Pokemon } from "../types/pokemon";

interface FavoriteI {
  // data: Pokemon[],

  ids: number[],
  addIds: (id: number) => void,
  deleteId: (id: number) => void
}

export function FavoriteScreen ({ addIds, ids}: FavoriteI): JSX.Element {
  return (
      <SafeAreaView>
        {/* <Text>{data[0].name}</Text> */}
        <Text>This is settingsScreen</Text>
        <Text>This is settingsScreen</Text>
        <Text>This is settingsScreen</Text>
      </SafeAreaView>   
    )
}