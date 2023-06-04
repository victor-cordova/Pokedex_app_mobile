import { FlatList, StyleSheet } from "react-native";

import { Pokemon } from "../types/pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonListI {
    selectPokemon: (pokemon: Pokemon) => void,
    pokemons: Pokemon[],
}


export function PokemonList({ selectPokemon, pokemons }: PokemonListI) {
    return (
        <FlatList
            data={pokemons}
            renderItem={({item}) => <PokemonCard pokemon={item} onPress={selectPokemon}/>}
            keyExtractor={item => item.order.toString()}
            numColumns={2}
            contentContainerStyle={styles.pokemonList}
            columnWrapperStyle={{justifyContent: "space-evenly"}}
            // style={{flex: 1}}
        />
    )
}

const styles = StyleSheet.create({
    pokemonList: {
      // paddingHorizontal: 5,
    //   backgroundColor: "white"

    //   flex: 1
    // flexDirection: "row",
    // flexWrap: "wrap",
    // marginHorizontal: 1,
        // width: win
        // ,
        // alignItems: "center",
        // flexGrow: "",
        // justifyContent: "space-around",

        // alignContent: "space-between"
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    }
});