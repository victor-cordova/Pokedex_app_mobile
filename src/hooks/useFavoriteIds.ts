import { useState } from "react";

export function useFavoriteIds(initialState: number[]) {
	const [favoriteIds, setFavoriteIds] = useState<number[]>(initialState);

	function addId(id: number) {
		const wasFound = favoriteIds.find(favorite => favorite === id) !== undefined;
		
		console.log("favorites: ", favoriteIds);
		if (!wasFound) {
			setFavoriteIds((current) => {
				return [...current, id];
			})
		}        
	}

	function deleteId(id: number) {
		const filteredIds = favoriteIds.filter(favoriteId => favoriteId !== id);
		
		if (favoriteIds.length > filteredIds.length) {
			setFavoriteIds(filteredIds);
		  }

		
	}

	function findId(id: number): boolean{
		return favoriteIds.findIndex(iter => iter === id) > -1;
	}

	return {
		favoriteIds,
		addId,
		deleteId,
		findId
	}
}

// useState for favoriteIds, save the favoriteIds in async... package, 