import Ingredients from "../types/Ingredients";
import { BACKEND_BASE_URL, INGREDIENTS_ENDPOINT } from "../constants";
import { useState, useEffect } from "react";

const header = {
	headers: { "Content-type": "application/json" },
};

export default (brewId: number) => {
	const [ingredients, setIngredients] = useState<Ingredients>();
	const [error, setError] = useState<string>("");

	const fetchIngredients = async (): Promise<void> => {
		try {
			const endpoint = `${BACKEND_BASE_URL}/${brewId}${INGREDIENTS_ENDPOINT}`;
			const response = await fetch(endpoint, header).then((response) =>
				response.json()
			);

			setIngredients(response);
		} catch (exception) {
			console.log(`Error when fetching ingredients: ${exception}`);
			setError(`Error when fetching ingredients: ${exception}`);
		}
	};

	useEffect(() => {
		fetchIngredients();
	}, []);

	return {
		ingredients,
		error,
		fetchIngredients,
	};
};
