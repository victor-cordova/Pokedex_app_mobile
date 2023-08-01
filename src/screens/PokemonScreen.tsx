import { PokedexStackScreenProps } from "../types/navigation";
import { PokemonLayout } from "../components/pokemon";

type Props = PokedexStackScreenProps<"Pokemon">;

export function PokemonScreen ({route}: Props): JSX.Element {
    const {
        data,
        isSelected,
        handleToggle
    } = route.params;

    return (   
        <PokemonLayout data={data} handleOnButtonPress={handleToggle} isFocused={isSelected}/>
    )
}