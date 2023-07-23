import { FlatList, StyleSheet, SafeAreaView } from "react-native";

import { Pokemon, PokemonList } from "../types/pokemon";
import { Card } from "./card";


interface ListI {
    selectPokemon: (pokemon: Pokemon) => void,
    pokemons: Pokemon[],
    favoritesId: number[],
    addId: (id: number) => void,
    findId: (id: number) => boolean,
    deleteId: (id: number) => void,
    isNext?: boolean,
    loadPokemons?: () => Promise<void>,
}

export function List({ 
    selectPokemon, 
    pokemons, 
    isNext, 
    loadPokemons,
    favoritesId,
    addId,
    deleteId,
    findId
}: ListI) {
    const isInfinite = loadPokemons !== undefined && isNext !== undefined;
    
    return (
        <SafeAreaView style={{
            width: "100%",
        }}>
            <FlatList
                data={pokemons}
                renderItem={({ item }) => 
                <Card 
                    pokemon={item} 
                    onPress={selectPokemon}
                    favoritesId={favoritesId}
                    addId={addId}
                    deleteId={deleteId}
                    findId={findId}
                />}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={[styles.list, styles.border, {

                }]}
                style={{
                    // height: "90%"
                }}
                // onEndReached={
                //     (isInfinite && isNext) &&
                //     loadPokemons}
                // onEndReachedThreshold={0.5}
                // ListFooterComponent={
                //     (isInfinite && isNext)
                //         && 
                //     <ActivityIndicator
                //         size={"large"}
                //         style={styles.spinner}
                //     />
                // }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        // padding: 20,
        // marginBottom: 40,
        // height: "90%"
    },
    spinner: {
        // marginTop: 20,
        // marginBottom: 60
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
});