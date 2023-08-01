import { StyleSheet, SafeAreaView, VirtualizedList } from "react-native";

import { Pokemon} from "../types/pokemon";
import { CardLayout } from "./card";
import { StackNavigationProp } from "@react-navigation/stack";
import { PokedexStackParamList } from "../types/navigation";

type navigationI = StackNavigationProp<PokedexStackParamList, "Pokedex", undefined>

interface ListI {
    // navigateToPokemonScreen: (data: Pokemon, handleButtonPress: any) => void,
    pokemons: Pokemon[],
    navigation: navigationI,
}

export function List({ 
    // navigateToPokemonScreen, 
    pokemons, 
    navigation
}: ListI) {

    function getItemCount(data: Pokemon[]): number {
        return data.length;
    }

    function getItem(data: Pokemon[], index: number): Pokemon {
        return data[index];
    }
    
    return (
        <SafeAreaView style={{
            width: "100%",
        }}>
            <VirtualizedList
                data={pokemons}
                initialNumToRender={30}
                renderItem={({item}) => 
                    <CardLayout 
                        pokemon={item} 
                        // onCardPress={navigateToPokemonScreen}
                        navigation={navigation}
                    />
                }
                keyExtractor={({order}) => String(order)}
                getItemCount={getItemCount}
                getItem={getItem}
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