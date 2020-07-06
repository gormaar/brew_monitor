import React from "react";
import styles from "./styles.module.scss";
import Statistics from "../Statistics";
import Details from "../Details";

const BrewPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3>Statistics</h3>
				<h3>Brew</h3>
			</div>
			<Statistics />
			<Details />
		</div>
	);
};

export default BrewPage;
