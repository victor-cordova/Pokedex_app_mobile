import { useState } from "react";

interface useToggleI {
	initialState: boolean
}

export function useToggle({ initialState }:useToggleI) {
	const [isSelected, setisSelected] = useState<boolean>(initialState);

	function handleToggle() {
		setisSelected(curr => !curr);
	}

	return {
		isSelected,
		handleToggle,
	}
}