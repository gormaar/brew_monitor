import { useState, useEffect } from "react";
import Brew from "../types/Brew";
import { BACKEND_BASE_URL, BREWS_ENDPOINT } from "../constants";

const header = {
	headers: { "Content-type": "application/json" },
};

export default () => {
	const [brews, setBrews] = useState<Brew[]>([]);

	const fetchBrews = async (): Promise<void> => {
		try {
			const endpoint = `${BACKEND_BASE_URL}${BREWS_ENDPOINT}`;
			const response = await fetch(endpoint, header).then((response) =>
				response.json()
			);
			setBrews(response);
			console.log(response);
		} catch (exception) {
			console.log(`Error when fetching brews: ${exception}`);
		}
	};

	useEffect(() => {
		fetchBrews();
	}, []);

	return {
		brews,
		fetchBrews,
	};
};
