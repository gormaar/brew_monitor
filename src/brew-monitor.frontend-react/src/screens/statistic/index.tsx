import React, {Fragment, FC} from "react";
import styles from "./styles.module.scss";
import Brew from "../../types/Brew";
import Temperature from "../../types/Temperature";
import Airlock from "../../types/Airlock";
import Graph from "./components/graph"
import Status from "./components/statusBar";
import Navbar from '../../common/navbar';

type StatisticsProps = {
	activeBrew: Brew | undefined;
	temperature: Temperature;
	airlock: Airlock;
};

const Statistics: FC<StatisticsProps> = (props) => {
	return (
		<Fragment>
			<Navbar />
			<Status activeBrew={props.activeBrew!}/>
			<h2>Airlock activity</h2>
			<h3>Short term</h3>
			<Graph legend="Airlock activity"/>
			<h3>Long term</h3>
			<Graph legend="Airlock activity" />
			<h2>Temperature</h2>
			<h3>Short term</h3>
			<Graph legend="Temperature" />
			<h3>Long term</h3>
			<Graph legend="Temperature" />
		</Fragment>
	);
};

export default Statistics;
