import React from 'react';
import {useEffect, useState} from 'react';
import Brew from "../../../../types/Brew";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core";
import styles from "../styles.module.scss";

type StatusProps = {
    activeBrew: Brew;
}

const Status: React.FC<StatusProps> = (props) => {

    const [fermentationStatus, setFermentationStatus] = useState<number>();
    const [fermentationDaysLeft, setFermentationDaysLeft] = useState<number>();
    
	const calculateFermentationStatus = () => {
		if (props.activeBrew?.brewDate) {
			var diff = Math.floor(
				(+Date.now() - +props.activeBrew.brewDate) / (1000 * 60 * 60 * 24)
			);
			setFermentationStatus(
				(diff! * 100) / props.activeBrew.fermentationPeriod
			);
		} else {
			return 1;
		}
	};

	const calculateFermentationDaysLeft = () => {
		if (props.activeBrew?.fermentationPeriod) {
			var diff = +props.activeBrew?.fermentationPeriod - +Date.now();
			return diff;
		}
	};

	useEffect(() => {
        calculateFermentationStatus();
        calculateFermentationDaysLeft();
	}, [props.activeBrew]);

	const BorderLinearProgress = withStyles((theme) => ({
		root: {
			height: 10,
			borderRadius: 5,
		},
		colorPrimary: {
			backgroundColor:
				theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
		},
		bar: {
			borderRadius: 5,
			backgroundColor: "#1a90ff",
		},
    }))(LinearProgress);
    
    return (
        <div className={styles.status}>
				<h3>Fermentation status</h3>
				<h5>
					{fermentationStatus}% | {fermentationDaysLeft}/
					{props.activeBrew?.fermentationPeriod} days
				</h5>
				<BorderLinearProgress
					variant="determinate"
					value={fermentationStatus}
				/>
			</div>
    )
}

export default Status;