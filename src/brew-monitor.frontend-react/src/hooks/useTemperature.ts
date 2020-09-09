import { useState, useEffect } from "react";
import { BACKEND_BASE_URL, TEMPERATURE_ENDPOINT } from "../constants";
import Temperature from "../types/Temperature";

const header = {
	headers: { "Content-type": "application/json" },
};

export default (brewId: number) => {
	const [temperature, setTemperature] = useState<Temperature>();
	const [tempError, setError] = useState<string>("");

	const fetchTemperature = async (): Promise<void> => {
		try {
			const endpoint = `${BACKEND_BASE_URL}/${brewId}${TEMPERATURE_ENDPOINT}`;
			const response = await fetch(endpoint, header).then((response) =>
				response.json()
			);
			setTemperature(response);
		} catch (exception) {
			console.log(`Error when fetching temperature: ${exception}`);
			setError(`Error when fetching temperature: ${exception}`);
		}
	};

	useEffect(() => {
		fetchTemperature();
	}, []);

	return {
		temperature,
		tempError,
		fetchTemperature,
	};
};
