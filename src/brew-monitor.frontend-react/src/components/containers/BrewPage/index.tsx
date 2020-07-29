import React from "react";
import styles from "./styles.module.scss";
import Statistics from "../Statistics";
import Details from "../Details";

const BrewPage: React.FC = () => {
	const pageToggle = true;
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3>Statistics</h3>
				<h3>Brew</h3>
			</div>
			<div className={styles.body}>
				<Statistics />
				<Details />
			</div>
		</div>
	);
};

export default BrewPage;
