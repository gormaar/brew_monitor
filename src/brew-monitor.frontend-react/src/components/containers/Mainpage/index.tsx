import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import BrewList from "../BrewList";
import BrewPage from "../BrewPage";
import { useState } from "react";
import useBrews from "../../../hooks/useBrews";
import useIngredients from "../../../hooks/useIngredients";
import Brew from "../../../types/Brew";
import { exception } from "console";

const MainPage: React.FC = () => {
	const { brews, brewError, fetchBrews } = useBrews();
	const [allBrews, setAllBrews] = useState<Brew[]>(brews);
	const [activeBrew, setActiveBrew] = useState<Brew>(brews.reverse()[0]);
	var brewId = 1;
	if (activeBrew !== undefined) {
		brewId = activeBrew.id;
	}
	const { ingredients, error, fetchIngredients } = useIngredients(brewId);

	const handleSetActiveBrew = (brew: Brew) => {
		setActiveBrew(brew);
	};

	useEffect(() => {
		setAllBrews(brews);
	}, []);

	useEffect(() => {
		fetchIngredients();
	}, [activeBrew]);

	return (
		<div className={styles.container}>
			<BrewList brews={allBrews} activeBrew={activeBrew} />
			<BrewPage activeBrew={activeBrew} ingredients={ingredients!} />
		</div>
	);
};

export default MainPage;
