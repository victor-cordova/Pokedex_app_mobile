import { ActivityIndicator, FlatList, StyleSheet, SafeAreaView, Platform, useWindowDimensions } from "react-native";

import { Pokemon } from "../types/pokemon";
import { Card } from "./Card";
import { TEXT_COLORS } from "../utils/constants";

interface ListI {
    selectPokemon: (pokemon: Pokemon) => void,
    pokemons: Pokemon[],
    fetchPokemons: () => Promise<void>,
    isNext: boolean,
}


export function List({ selectPokemon, pokemons, fetchPokemons, isNext }: ListI) {
    return (
        <SafeAreaView style={{
            width: "100%",
        }}>
            <FlatList
                data={pokemons}
                renderItem={({ item }) => <Card pokemon={item} onPress={selectPokemon}/>}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={[styles.list, styles.border, {

                }]}
                style={{
                    // height: "90%"
                }}
                onEndReached={isNext && fetchPokemons}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    isNext && 
                    <ActivityIndicator
                        size={"large"}
                        style={styles.spinner}
                        // color={"#AEAEAE"}
                    />
                }
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