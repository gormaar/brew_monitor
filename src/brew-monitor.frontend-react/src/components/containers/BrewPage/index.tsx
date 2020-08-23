import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import Statistics from "../Statistics";
import Details from "../Details";
import Brew from "../../../types/Brew";
import Ingredients from "../../../types/Ingredients";

type BrewPageProps = {
	activeBrew: Brew;
	ingredients: Ingredients;
};

const BrewPage: React.FC<BrewPageProps> = (props) => {
	const [page, togglePage] = useState(true);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.header__container}>
					<span>
						<h3
							className={page ? undefined : styles.header__inactive}
							onClick={() => togglePage(true)}
						>
							Statistics
						</h3>
					</span>
				</div>
				<div className={styles.header__container}>
					<span>
						<h3
							className={page ? styles.header__inactive : undefined}
							onClick={() => togglePage(false)}
						>
							Brew
						</h3>
					</span>
				</div>
			</div>
			<div className={styles.body}>
				{page ? (
					<Statistics />
				) : (
					<Details brew={props.activeBrew} ingredients={props.ingredients} />
				)}
			</div>
		</div>
	);
};

export default BrewPage;
