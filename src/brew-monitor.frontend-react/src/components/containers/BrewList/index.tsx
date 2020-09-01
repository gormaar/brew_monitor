import React from "react";
import styles from "./styles.module.scss";
import Brew from "../../../types/Brew";
import BrewListItem from "../BrewListItem";
import Button from "@material-ui/core/Button";

type BrewListProps = {
	brews: Brew[];
	activeBrew: Brew;
};

const BrewList: React.FC<BrewListProps> = (props) => {
	return (
		<div className={styles.container}>
			<h3>Brews</h3>

			{props.brews.map((brew) => (
				<BrewListItem
					name={brew.name}
					type={brew.type}
					status={brew.status}
					fermentationDaysleft={brew.fermentationDaysLeft}
					bottledDaysLeft={brew.bottledDaysLeft}
					lastActive={brew.lastActive}
					key={brew.id}
				/>
			))}
			<div className={styles.createBrew}>
				<Button>Create brew</Button>
			</div>
		</div>
	);
};

export default BrewList;
