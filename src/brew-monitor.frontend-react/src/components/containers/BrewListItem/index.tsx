import React from "react";
import styles from "./styles.module.scss";

type BrewListItemProps = {
	name: string;
	type: string;
	status: string;
	fermentationDaysleft: number;
	bottledDaysLeft: number;
	lastActive: Date;
	key: number;
};

const BrewListItem: React.FC<BrewListItemProps> = (props) => {
	return (
		<div className={styles.container__brewListItem}>
			<h4>Brew name:{props.name}</h4>
			<div>
				<h5>Brew type:{props.type}</h5>
				<h5>Status: {props.status}</h5>
				<h5>Fermentation days left: {props.fermentationDaysleft}</h5>
				<h5>Bottled days left: {props.bottledDaysLeft}</h5>
				<h5>Last active: {props.lastActive}</h5>
			</div>
		</div>
	);
};

export default BrewListItem;
