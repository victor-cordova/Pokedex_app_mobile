import { PokedexStackScreenProps } from "../types/navigation";
import { PokemonComponent } from "../components/pokemon";

type Props = PokedexStackScreenProps<"Pokemon">;

export function PokemonScreen ({route}: Props): JSX.Element {
    const {
        data,
        isFocused
    } = route.params;

    return (   
        <PokemonComponent data={data} isFocused={isFocused}/>
    )
}