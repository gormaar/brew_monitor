import { useState, useEffect } from "react";
import Brew from "../types/Brew";
import { BACKEND_BASE_URL, BREWS_ENDPOINT } from "../constants";

const header = {
	headers: { "Content-type": "application/json" },
};

export default () => {
	const [tempBrews, setTempBrews] = useState<Brew[]>([]);

	const fetchBrews = async (): Promise<void> => {
		try {
			const endpoint = `${BACKEND_BASE_URL}${BREWS_ENDPOINT}`;
			const response = await fetch(endpoint, header).then((response) =>
				response.json()
			);
			setTempBrews(response);
			console.log(response);
		} catch (exception) {
			console.log(`Error when fetching brews: ${exception}`);
		}
	};

	useEffect(() => {
		fetchBrews();
	}, []);

	return {
		tempBrews,
		fetchBrews,
	};
};
