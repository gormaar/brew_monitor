import { useState, useEffect } from "react";
import Brew from "../types/Brew";
import { BACKEND_BASE_URL, BREWS_ENDPOINT } from "../constants";
import { colors } from "@material-ui/core";

const header = {
	headers: { "Content-type": "application/json" },
};

export default () => {
	const [brews, setBrews] = useState<Brew[]>([]);
	const [brewError, setbrewError] = useState<string>("");

	const fetchBrews = async (): Promise<void> => {
		try {
			const endpoint = `${BACKEND_BASE_URL}${BREWS_ENDPOINT}`;
			const response = await fetch(endpoint, header).then((response) =>
				response.json()
			);
			setBrews(response);
		} catch (exception) {
			console.log(`Error when fetching brews: ${exception}`);
			setbrewError(`Error when fetching brews ${exception}`);
		}
	};

	useEffect(() => {
		fetchBrews();
	}, []);

	return {
		brews,
		brewError,
		fetchBrews,
	};
};
