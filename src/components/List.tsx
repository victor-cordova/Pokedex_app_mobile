import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import { Pokemon } from "../types/pokemon";
import { Card } from "./Card";

interface ListI {
    selectPokemon: (pokemon: Pokemon) => void,
    pokemons: Pokemon[],
    fetchPokemons: () => Promise<void>,
    isNext: boolean,
}


export function List({ selectPokemon, pokemons, fetchPokemons, isNext }: ListI) {
    return (
        <FlatList
            data={pokemons}
            renderItem={({item}) => <Card key={item.order} pokemon={item} onPress={selectPokemon}/>}
            keyExtractor={item => item.order.toString()}
            // key={}
            // numColumns={2}
            contentContainerStyle={[styles.list, styles.border]}
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
    list: {
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