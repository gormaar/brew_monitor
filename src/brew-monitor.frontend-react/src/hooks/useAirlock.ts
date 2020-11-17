import { useState, useEffect } from "react";
import Airlock from "../types/Airlock";
import { BACKEND_BASE_URL, AIRLOCK_ENDPOINT } from "../constants";

const header = {
	headers: { "Content-type": "application/json" },
};

export default (brewId: number) => {
	const [airlock, setAirlock] = useState<Airlock>();
	const [airlockError, setError] = useState<string>("");

	const fetchAirlock = async (): Promise<void> => {
		try {
			const endpoint = `${BACKEND_BASE_URL}/${brewId}${AIRLOCK_ENDPOINT}`;
			const response = await fetch(endpoint, header).then((response) =>
				response.json()
			);
			setAirlock(response);
		} catch (exception) {
			console.log(`Error when fetching airlock: ${exception}`);
			setError(`Error when fetching airlock: ${exception}`);
		}
	};
	useEffect(() => {
		fetchAirlock();
	}, []);

	return {
		airlock,
		airlockError,
		fetchAirlock,
	};
};
