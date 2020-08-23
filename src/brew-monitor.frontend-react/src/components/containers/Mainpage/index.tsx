import React from "react";
import styles from "./styles.module.scss";
import BrewList from "../BrewList";
import BrewPage from "../BrewPage";
import { useState } from "react";

const MainPage: React.FC = () => {
	const [allBrews, setAllBrews] = useState();
	const [activeBrew, setActiveBrew] = useState();
	const [ingredients, setIngredients] = useState();

	return (
		<div className={styles.container}>
			<BrewList />
			<BrewPage activeBrew={activeBrew} ingredients={ingredients} />
		</div>
	);
};

export default MainPage;
