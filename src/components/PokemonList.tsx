import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import { Pokemon } from "../types/pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonListI {
    selectPokemon: (pokemon: Pokemon) => void,
    pokemons: Pokemon[],
    fetchPokemons: () => Promise<void>,
    isNext: boolean,
}


export function PokemonList({ selectPokemon, pokemons, fetchPokemons, isNext }: PokemonListI) {
    return (
        <FlatList
            data={pokemons}
            renderItem={({item}) => <PokemonCard key={item.order} pokemon={item} onPress={selectPokemon}/>}
            keyExtractor={item => item.order.toString()}
            // key={}
            // numColumns={2}
            contentContainerStyle={[styles.pokemonList, styles.border]}
            // columnWrapperStyle={{justifyContent: "space-evenly"}}
            // style={{flex: 1}}
            onEndReached={isNext && fetchPokemons}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                isNext && 
                <ActivityIndicator
                    size={"large"}
                    style={styles.spinner}
                    color={"#AEAEAE"}
                />
            }
        />
    )
}

const styles = StyleSheet.create({
    pokemonList: {
        // flex: 1,
        // justifyContent: "center",
        // alignContent: "center",
        padding: 20,
        // alignItems: "center"
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    },
    border: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 1
    },
});