import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import Statistics from "../Statistics";
import Details from "../Details";
import Brew from "../../../types/Brew";
import Ingredients from "../../../types/Ingredients";
import Temperature from "../../../types/Temperature";
import Airlock from "../../../types/Airlock";

type BrewPageProps = {
	activeBrew: Brew;
	ingredients: Ingredients;
	temperature: Temperature;
	airlock: Airlock;
};

const BrewPage: React.FC<BrewPageProps> = (props) => {
	const [page, togglePage] = useState<boolean>(true);

	return (
		<div className={styles.container__brewPage}>
			<div className={styles.body}>
				{page ? (
					<Statistics
						temperature={props.temperature}
						airlock={props.airlock}
						activeBrew={props.activeBrew}
					/>
				) : (
					<Details brew={props.activeBrew} ingredients={props.ingredients} />
				)}
			</div>
		</div>
	);
};

export default BrewPage;
