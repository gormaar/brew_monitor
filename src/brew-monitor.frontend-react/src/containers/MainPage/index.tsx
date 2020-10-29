import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useState } from "react";
import useBrews from "../../hooks/useBrews";
import useIngredients from "../../hooks/useIngredients";
import useTemperature from "../../hooks/useTemperature";
import useAirlock from "../../hooks/useAirlock";
import Brew from "../../types/Brew";
import Navbar from "../../common/navbar";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Tab from "@material-ui/core/Tab";



const MainPage: React.FC = () => {
	const { brews, brewError, fetchBrews } = useBrews();
	const [allBrews, setAllBrews] = useState<Brew[]>(brews);
	const [activeBrew, setActiveBrew] = useState<Brew>(brews.reverse()[0]);

	var brewId = 1;
	if (activeBrew !== undefined) {
		brewId = activeBrew.id;
	}
	const { ingredients, error, fetchIngredients } = useIngredients(brewId);
	const { temperature, tempError, fetchTemperature } = useTemperature(brewId);
	const { airlock, airlockError, fetchAirlock } = useAirlock(brewId);

	const handleSetActiveBrew = (brew: Brew) => {
		setActiveBrew(brew);
	};

	useEffect(() => {
		setAllBrews(brews);
	}, []);

	useEffect(() => {
		fetchIngredients();
		fetchTemperature();
		fetchAirlock();
	}, [activeBrew]);
	
	return (
		<div className={styles.mainpage}>
			<Navbar>
				<div className={styles.navbar}>	
				<FormControl >
					<InputLabel>Brews</InputLabel>
					<Select className={styles.navbar__select}>
						{brews.map((brew) => {
							return(
								<option>
								{brew.name}
							</option>
							)
						})}
					</Select>
				</FormControl>	
				<Tab className={styles.navbar__link} label="Statistics" >
					<Link to="/brew/:brewId/statistics" />
				</Tab>
				<Tab className={styles.navbar__link} label="Details" >
					<Link to="/brew/:brewId/details" />
				</Tab>
				<Tab className={styles.navbar__link} label="Create brew">
					<Link to="/brew/create" />
				</Tab>
				</div>
			</Navbar>
		</div>
	);
};


export default MainPage;