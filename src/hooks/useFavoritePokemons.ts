import { useState } from "react";
import { Pokemon } from "../types/pokemon";

interface PropsI {

}

export function useFavoritePokemons() {
    const [favorite, setFavorite] = useState<Pokemon[]>([]);

    function addFavorite(item: Pokemon) {
        setFavorite((current) => {
            return [...current, item];
        })
    }

    return {
        favorite,
        addFavorite,
    }
}