import { PokedexStackScreenProps } from "../types/navigation";
import { CardLayout } from "../components/card";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";
import { parseData } from "../utils/parseData";
import { Text } from "react-native";

type Props = PokedexStackScreenProps<"Pokemon">;

export function PokemonScreen ({route}: Props): JSX.Element {
    const {
        id
    } = route.params;

    const data = useContext(DataContext).pokemonsQuery.data[id - 1];
    // console.log(data);
    // console.log(id);
    // return <Text>jeje</Text>
    const parsedData = parseData(data);

    return (   
        <CardLayout data={parsedData}/>
    )
}