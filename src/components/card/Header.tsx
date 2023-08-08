import { StyleSheet, View, Image, Text } from "react-native";
import { Pokemon } from "../../types/pokemon";
import { AXIS, Spacer } from "../Spacer";
import { FavoriteButton } from "./FavoriteButton";
import { saveFavoriteId, removeFavoriteId, checkIfFavoriteId } from "../../services/favorite";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface HeaderI {
	data: Pokemon
}

export function Header({ data }: HeaderI) {
	const queryClient = useQueryClient();

	const idQuery = useQuery({
		queryKey: ["favoriteIds", "isFavoriteID"],
		queryFn: () => checkIfFavoriteId(data.order),
	})

	const idMutation = useMutation({
		mutationFn: (id: number) => {
			if (idQuery.data) return removeFavoriteId(id);
			else return saveFavoriteId(id);
		},
		onSuccess: () => queryClient.invalidateQueries(["favoriteIds"])
	})
  
	return (
		<View style={[styles.header, styles.border, {
			backgroundColor: data.color
		}]}>
			<Image 
				source={{uri: data.sprite}} 
				style={[styles.sprite, styles.border]}
			/>

			<Spacer size={16} axis={AXIS.Y}/>

			<Text style={[styles.name, styles.border]}>{data.name}</Text>

			<Spacer size={4} axis={AXIS.Y}/>

			<View style={[styles.orderContainer, styles.border]}>
				<Image 
					source={require("../../../assets/icon_pokeball.png")}
					style={[styles.icon, styles.border]}  
				/>
				
				<Text style={[styles.order, styles.border]}>
					{" " + `${data.order}`.padStart(4, "0")}
				</Text>
			</View>
			<FavoriteButton isFocused={idQuery.data} handleOnPress={() => idMutation.mutate(data.order)}/>
		</View>
	)    
}

const styles = StyleSheet.create({
	icon: {
		width: 20,
		height: 20,
	},

	header: {
		width: "100%",

		alignItems: "center"
		// marginBottom: 10,
	},
	sprite: { 
		width: 200, 
		height: 200,
	},
	name: {
		// fontSize: 20,
		// color: "#fff",
		// fontWeight: "bold",
	},
	orderContainer: {
		flexDirection:'row',
		alignItems: "center"
	},
	order: {
		// color: "#fff",
		// fontSize: 13,
	},
	

	border: {
			// borderColor: "red",
			// borderWidth: 1,
			// borderRadius: 1
	},
})