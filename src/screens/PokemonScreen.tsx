import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Image } from "react-native";
import { PokedexStackParamList } from "../types/navigation";
import { StatBar } from "../components/StatBar";
import { DetailedCard } from "../components/DetailedCard";

type PropsI = StackScreenProps<PokedexStackParamList, "Pokemon">;

export function PokemonScreen(navigator: PropsI): JSX.Element {
  // navigation.
  // console.log(route.params);
  return (
      // <View>
      //   <StatBar stat={50}/>
      //   {/* <Text>{route.params.type}</Text> */}
      //   <Text>{route.params.name}</Text>
      //   <Text>{route.params.order}</Text>
      //   <Image source={{uri: route.params.sprite}} style={{ width: 200, height: 200 }}/>
      // </View>   
      <DetailedCard navigator={navigator}/>
    )
}