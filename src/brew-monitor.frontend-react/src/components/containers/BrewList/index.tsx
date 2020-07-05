import React from "react";
import styles from "./styles.module.scss";
import useBrews from "../../../hooks/useBrews";
import { useState, useEffect } from "react";
import Brew from "../../../types/Brew";
import BrewListItem from "../BrewListItem";

const BrewList: React.FC = (props) => {
	const { tempBrews, fetchBrews } = useBrews();
	const [brews, setBrews] = useState<Brew[]>([]);
	const [activeBrew, setActiveBrew] = useState<Brew>(brews.reverse()[0]);

	useEffect(() => {
		setBrews(tempBrews);
		console.log("brews:", tempBrews);
	}, [tempBrews]);

	return (
		<div className={styles.container}>
			<h3>Brews</h3>

			{tempBrews.map((brew) => (
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
				<button>Create brew</button>
			</div>
		</div>
	);
};

export default BrewList;
