import React from "react";
import styles from "./styles.module.scss";
import BrewList from "../BrewList";
import BrewPage from "../BrewPage";
import { useState } from "react";
import useBrews from "../../../hooks/useBrews";
import useIngredients from "../../../hooks/useIngredients";
import Brew from "../../../types/Brew";
import Ingredients from "../../../types/Ingredients";

const MainPage: React.FC = () => {
	const { brews, fetchBrews } = useBrews();
	const { ingredients, fetchIngredients } = useIngredients();
	const [allBrews, setAllBrews] = useState<Brew[]>();
	const [activeBrew, setActiveBrew] = useState<Brew>(brews[0]);
	const [currentIngredients, setCurrentIngredients] = useState<Ingredients>();

	const handleGetActiveBrew = () => {};
	const handleGetIngredientsForActiveBrew = (activeBrew: Brew) => {
		fetchIngredients(activeBrew.id);
	};
	return (
		<div className={styles.container}>
			<BrewList />
			<BrewPage activeBrew={activeBrew} ingredients={ingredients} />
		</div>
	);
};

export default MainPage;
