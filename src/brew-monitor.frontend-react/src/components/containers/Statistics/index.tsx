import React from "react";
import styles from "./styles.module.scss";

type StatisticsProps = {
	temperature: number;
	airlock: number;
	startDate: Date;
	endDate: Date;
};

const Statistics: React.FC = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.status}></div>
			<div className={styles.airlock}></div>
			<div className={styles.temperature}></div>
			<div className={styles.gravity}></div>
		</div>
	);
};

export default Statistics;
