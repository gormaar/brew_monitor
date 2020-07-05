import React from "react";
import styles from "./styles.module.scss";
import BrewList from "../BrewList";
import BrewPage from "../BrewPage";

const Mainpage: React.FC = () => {
	return (
		<div className={styles.container}>
			<BrewList />
			<BrewPage />
		</div>
	);
};

export default Mainpage;
