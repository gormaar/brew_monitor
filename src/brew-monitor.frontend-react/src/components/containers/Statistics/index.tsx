import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import { ResponsiveLine } from "@nivo/line";
import LinearProgress from "@material-ui/core/LinearProgress";
import Brew from "../../../types/Brew";
import Temperature from "../../../types/Temperature";
import Airlock from "../../../types/Airlock";
import { withStyles } from "@material-ui/core";

type StatisticsProps = {
	activeBrew: Brew | undefined;
	temperature: Temperature;
	airlock: Airlock;
};

const Statistics: React.FC<StatisticsProps> = (props) => {
	const [fermentationStatus, setFermentationStatus] = useState<number>();
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
	}, []);

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
		<div className={styles.container__statistics}>
			<div className={styles.status}>
				<h3>Fermentation status</h3>
				<h5>
					{fermentationStatus}% | {calculateFermentationDaysLeft()}/
					{props.activeBrew?.fermentationPeriod} days
				</h5>
				<BorderLinearProgress
					variant="determinate"
					value={fermentationStatus}
				/>
			</div>
			<div className={styles.airlock}>
				<h3>Airlock activity short term</h3>
				<div>
					<ResponsiveLine
						data={data}
						margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
						xScale={{ type: "point" }}
						yScale={{
							type: "linear",
							min: "auto",
							max: "auto",
							stacked: true,
							reverse: false,
						}}
						axisTop={null}
						axisRight={null}
						axisBottom={{
							orient: "bottom",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Time",
							legendOffset: 36,
							legendPosition: "middle",
						}}
						axisLeft={{
							orient: "left",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Airlock activity",
							legendOffset: -40,
							legendPosition: "middle",
						}}
						colors={{ scheme: "nivo" }}
						pointSize={10}
						pointColor={{ theme: "background" }}
						pointBorderColor={{ from: "serieColor" }}
						pointBorderWidth={2}
						pointLabel="y"
						pointLabelYOffset={-12}
						useMesh={true}
						legends={[
							{
								anchor: "bottom-right",
								direction: "column",
								justify: false,
								translateX: 100,
								translateY: 0,
								itemsSpacing: 0,
								itemDirection: "left-to-right",
								itemWidth: 80,
								itemHeight: 20,
								itemOpacity: 0.75,
								symbolSize: 12,
								symbolShape: "circle",
								symbolBorderColor: "rgba(0, 0, 0, .5)",
								effects: [
									{
										on: "hover",
										style: {
											itemBackground: "rgba(0, 0, 0, .03)",
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				</div>
				<h3>Airlock activity long term</h3>
				<div>
					<ResponsiveLine
						data={data}
						margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
						xScale={{ type: "point" }}
						yScale={{
							type: "linear",
							min: "auto",
							max: "auto",
							stacked: true,
							reverse: false,
						}}
						axisTop={null}
						axisRight={null}
						axisBottom={{
							orient: "bottom",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Time",
							legendOffset: 36,
							legendPosition: "middle",
						}}
						axisLeft={{
							orient: "left",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Airlock activity",
							legendOffset: -40,
							legendPosition: "middle",
						}}
						colors={{ scheme: "nivo" }}
						pointSize={10}
						pointColor={{ theme: "background" }}
						pointBorderColor={{ from: "serieColor" }}
						pointBorderWidth={2}
						pointLabel="y"
						pointLabelYOffset={-12}
						useMesh={true}
						legends={[
							{
								anchor: "bottom-right",
								direction: "column",
								justify: false,
								translateX: 100,
								translateY: 0,
								itemsSpacing: 0,
								itemDirection: "left-to-right",
								itemWidth: 80,
								itemHeight: 20,
								itemOpacity: 0.75,
								symbolSize: 12,
								symbolShape: "circle",
								symbolBorderColor: "rgba(0, 0, 0, .5)",
								effects: [
									{
										on: "hover",
										style: {
											itemBackground: "rgba(0, 0, 0, .03)",
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				</div>
			</div>

			<div className={styles.temperature}>
				<h3>Temperature short term</h3>
				<div>
					<ResponsiveLine
						data={data}
						margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
						xScale={{ type: "point" }}
						yScale={{
							type: "linear",
							min: "auto",
							max: "auto",
							stacked: true,
							reverse: false,
						}}
						axisTop={null}
						axisRight={null}
						axisBottom={{
							orient: "bottom",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Time",
							legendOffset: 36,
							legendPosition: "middle",
						}}
						axisLeft={{
							orient: "left",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Temperature",
							legendOffset: -40,
							legendPosition: "middle",
						}}
						colors={{ scheme: "nivo" }}
						pointSize={10}
						pointColor={{ theme: "background" }}
						pointBorderColor={{ from: "serieColor" }}
						pointBorderWidth={2}
						pointLabel="y"
						pointLabelYOffset={-12}
						useMesh={true}
						legends={[
							{
								anchor: "bottom-right",
								direction: "column",
								justify: false,
								translateX: 100,
								translateY: 0,
								itemsSpacing: 0,
								itemDirection: "left-to-right",
								itemWidth: 80,
								itemHeight: 20,
								itemOpacity: 0.75,
								symbolSize: 12,
								symbolShape: "circle",
								symbolBorderColor: "rgba(0, 0, 0, .5)",
								effects: [
									{
										on: "hover",
										style: {
											itemBackground: "rgba(0, 0, 0, .03)",
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				</div>
				<h3>Temperature long term</h3>
				<div className={styles.templong}>
					<ResponsiveLine
						data={data}
						margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
						xScale={{ type: "point" }}
						yScale={{
							type: "linear",
							min: "auto",
							max: "auto",
							stacked: true,
							reverse: false,
						}}
						axisTop={null}
						axisRight={null}
						axisBottom={{
							orient: "bottom",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Time",
							legendOffset: 36,
							legendPosition: "middle",
						}}
						axisLeft={{
							orient: "left",
							tickSize: 1,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Temperature",
							legendOffset: -40,
							legendPosition: "middle",
						}}
						colors={{ scheme: "nivo" }}
						pointSize={10}
						pointColor={{ theme: "background" }}
						pointBorderColor={{ from: "serieColor" }}
						pointBorderWidth={2}
						pointLabel="y"
						pointLabelYOffset={-12}
						useMesh={true}
						legends={[
							{
								anchor: "bottom-right",
								direction: "column",
								justify: false,
								translateX: 100,
								translateY: 0,
								itemsSpacing: 0,
								itemDirection: "left-to-right",
								itemWidth: 80,
								itemHeight: 20,
								itemOpacity: 0.75,
								symbolSize: 12,
								symbolShape: "circle",
								symbolBorderColor: "rgba(0, 0, 0, .5)",
								effects: [
									{
										on: "hover",
										style: {
											itemBackground: "rgba(0, 0, 0, .03)",
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				</div>
			</div>
			<div className={styles.gravity}></div>
		</div>
	);
};

export default Statistics;
