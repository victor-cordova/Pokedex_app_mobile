import { StackScreenProps } from "@react-navigation/stack";
import { PokedexStackParamList } from "../types/navigation";
import { DetailedCard } from "../components/DetailedCard";

type PropsI = StackScreenProps<PokedexStackParamList, "Pokemon">;

export function PokemonScreen(navigator: PropsI): JSX.Element {
  return (   
      <DetailedCard navigator={navigator}/>
    )
}