import { View, Text } from "react-native";
import { RootStackScreenProps } from "../types/navigation";

export function AccountScreen ({route, navigation}: RootStackScreenProps<"Account">): JSX.Element {
  // route.params.ss
  // navigation.navigate("PokedexNavigation", {
  //   screen: "Pokedex",
    // path:  
    // params: {

    // }
  // });

  return (
      <View>
        <Text>This is settingsScreen</Text>
        <Text>This is settingsScreen</Text>
        <Text>This is settingsScreen</Text>
        <Text>This is settingsScreen</Text>
      </View>   
    )
}