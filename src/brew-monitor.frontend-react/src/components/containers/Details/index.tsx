import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import Brew from "../../../types/Brew";
import Ingredients from "../../../types/Ingredients";

type DetailsProps = {
	brew: Brew;
	ingredients: Ingredients;
};

const Details: React.FC<DetailsProps> = (props) => {
	const renderBrewData = () => {
		Object.keys(props.brew).map((item, i) => {
			return <span key={i}>{item}</span>;
		});
	};

	const renderBrewMetaData = () => {
		if (props.brew) {
			Object.keys(props.brew).map((item, i) => {
				return <span key={i}>{item[i]}</span>;
			});
		} else {
			return <span>{`Brew not found: ${props.brew}`}</span>;
		}
	};

	const renderIngredientsData = () => {
		Object.keys(props.ingredients).map((item, i) => {
			return <span key={i}>{item}</span>;
		});
	};

	const renderIngredientsMetaData = () => {
		Object.keys(props.ingredients).map((item, i) => {
			return <span key={i}>{item[i]}</span>;
		});
	};

	return (
		<div className={styles.container__details}>
			<div className={styles.brew}>
				<h3>Brew:</h3>
				<div>{renderBrewMetaData}</div>
				<div>{renderBrewData}</div>
			</div>
			<div className={styles.ingredients}>
				<h3>Ingredients:</h3>
				<div>{renderIngredientsMetaData}</div>
				<div>{renderIngredientsData}</div>
			</div>
		</div>
	);
};

export default Details;
