import React from "react";
import styles from "./styles.module.scss";
import Brew from "../../../types/Brew";
import Temperature from "../../../types/Temperature";
import Airlock from "../../../types/Airlock";
import Graph from "../../common/Graph"
import Status from "./Status";

type StatisticsProps = {
	activeBrew: Brew | undefined;
	temperature: Temperature;
	airlock: Airlock;
};

const Statistics: React.FC<StatisticsProps> = (props) => {
	return (
		<div className={styles.statistics}>
			<div className={styles.statistics__status}>
				<Status activeBrew={props.activeBrew!}/>
			</div>
			<div className={styles.airlock}>
				<h3>Airlock activity short term</h3>
				<div>
						<Graph legend="Airlock activity"/>
				</div>
				<h3>Airlock activity long term</h3>
				<div>
						<Graph  legend="Airlock activity" />
				</div>
			</div>
			<div className={styles.temperature}>
				<h3>Temperature short term</h3>
				<div>
						<Graph  legend="Temperature"/>
				</div>
				<h3>Temperature long term</h3>
				<div className={styles.templong}>
						<Graph  legend="Temperature" />
				</div>
			</div>
			<div className={styles.gravity}></div>
		</div>
	);
};

export default Statistics;
