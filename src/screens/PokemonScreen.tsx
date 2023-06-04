import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Image } from "react-native";
import { PokedexStackParamList } from "../types/navigation";

type PropsI = StackScreenProps<PokedexStackParamList, "Pokemon">;

export function PokemonScreen({route}: PropsI): JSX.Element {

  console.log(route.params);
  return (
      <View>
        <Text>{route.params.type}</Text>
        <Text>{route.params.name}</Text>
        <Text>{route.params.order}</Text>
        <Image source={{uri: route.params.sprite}} style={{ width: 200, height: 200 }}/>
      </View>   
    )
}