import React from "react";
import styles from "./styles.module.scss";
import Brew from "../../../types/Brew";
import Temperature from "../../../types/Temperature";
import Airlock from "../../../types/Airlock";
import Graph from "./Graph"
import Status from "./Status";

type StatisticsProps = {
	activeBrew: Brew | undefined;
	temperature: Temperature;
	airlock: Airlock;
};

const Statistics: React.FC<StatisticsProps> = (props) => {
	
	const data = [
		{
			id: "Respiration",
			data: [
				{ x: 1, y: 30 },
				{ x: 2, y: 31 },
				{ x: 3, y: 30 },
				{ x: 4, y: 33 },
				{ x: 5, y: 50 },
				{ x: 6, y: 40 },
				{ x: 7, y: 39 },
				{ x: 8, y: 45 },
				{ x: 9, y: 52 },
			],
		},
	];


	return (
		<div className={styles.container__statistics}>
			<div>
				<Status activeBrew={props.activeBrew!}/>
			</div>
			<div className={styles.airlock}>
				<h3>Airlock activity short term</h3>
				<div>
					{props.airlock && props.airlock.hourValue} :
					<Graph data={props.airlock.hourValue} legend="Airlock activity"/>
					? <div></div>
				</div>
				<h3>Airlock activity long term</h3>
				<div>
					<Graph data={props.airlock.value} legend="Airlock activity" />
				</div>
			</div>
			<div className={styles.temperature}>
				<h3>Temperature short term</h3>
				<div>
					<Graph data={props.temperature.value} legend="Temperature"/>
				</div>
				<h3>Temperature long term</h3>
				<div className={styles.templong}>
					<Graph data={props.temperature.value} legend="Temperature" />
				</div>
			</div>
			<div className={styles.gravity}></div>
		</div>
	);
};

export default Statistics;
