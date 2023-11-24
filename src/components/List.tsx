import { StyleSheet, SafeAreaView, VirtualizedList } from "react-native";
// import { FixedSizeList as VirtualList } from "react-window";
import { Pokemon, PokemonDB} from "../types/pokemon";
import { DetailLayout } from "./detail";
import { StackNavigationProp } from "@react-navigation/stack";
import { PokemonsStackParamList } from "../types/navigation";
import { useCallback } from "react";

type navigationI = StackNavigationProp<PokemonsStackParamList, "Pokemons", undefined>

interface ListI {
	// navigateToPokemonScreen: (data: Pokemon, handleButtonPress: any) => void,
	pokemons: PokemonDB[],
	// favoriteIds: number[],
	navigation: navigationI,
}

export function List({ 
	// navigateToPokemonScreen, 
	pokemons, 
	// favoriteIds,
	navigation
}: ListI) {

	const getItemCount = useCallback((data: Pokemon[]): number => {
		return data?.length;
	}, []);

	const getItem = useCallback((data: PokemonDB[], index: number): PokemonDB => {
		return data[index];
	}, [])
    
	return (
		<SafeAreaView style={{
			width: "100%",
		}}>
			<VirtualizedList
				data={pokemons}
				initialNumToRender={50}
				renderItem={({item}) => 
					<DetailLayout 
						pokemon={item} 
						// isFavorite={favoriteIds.findIndex(id => id ===item.order) !== -1}
						navigation={navigation}

					/>
				}
				keyExtractor={({id}) => String(id)}
				getItemCount={getItemCount}
				getItem={getItem}
				//Trying to improve performance
				windowSize={17}
				maxToRenderPerBatch={50}
				removeClippedSubviews={true}
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