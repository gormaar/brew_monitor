import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import BrewList from "../BrewList";
import BrewPage from "../BrewPage";
import { useState } from "react";
import useBrews from "../../../hooks/useBrews";
import useIngredients from "../../../hooks/useIngredients";
import useTemperature from "../../../hooks/useTemperature";
import useAirlock from "../../../hooks/useAirlock";
import Brew from "../../../types/Brew";

const MainPage: React.FC = () => {
	const { brews, brewError, fetchBrews } = useBrews();
	const [allBrews, setAllBrews] = useState<Brew[]>(brews);
	const [activeBrew, setActiveBrew] = useState<Brew>(brews.reverse()[0]);

	var brewId = 1;
	if (activeBrew !== undefined) {
		brewId = activeBrew.id;
	}
	const { ingredients, error, fetchIngredients } = useIngredients(brewId);
	const { temperature, tempError, fetchTemperature } = useTemperature(brewId);
	const { airlock, airlockError, fetchAirlock } = useAirlock(brewId);

	const handleSetActiveBrew = (brew: Brew) => {
		setActiveBrew(brew);
	};

	useEffect(() => {
		setAllBrews(brews);
	}, []);

	useEffect(() => {
		fetchIngredients();
		fetchTemperature();
		fetchAirlock();
	}, [activeBrew]);

	return (
		<div className={styles.container__mainpage}>
			<BrewList brews={allBrews} activeBrew={activeBrew} />
			<BrewPage
				activeBrew={activeBrew}
				ingredients={ingredients!}
				temperature={temperature!}
				airlock={airlock!}
			/>
		</div>
	);
};

export default MainPage;
