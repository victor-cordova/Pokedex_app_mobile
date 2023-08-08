import { PokedexStackScreenProps } from "../types/navigation";
import { CardLayout } from "../components/card";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

type Props = PokedexStackScreenProps<"Pokemon">;

export function PokemonScreen ({route}: Props): JSX.Element {
    const {
        id
    } = route.params;

    const data = useContext(DataContext).pokemonsQuery.data[id - 1];

    return (   
        <CardLayout data={data}/>
    )
}