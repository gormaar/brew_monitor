import React from "react";
import styles from "./styles.module.scss";
import Brew from "../../types/Brew";
import Ingredients from "../../types/Ingredients";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

type DetailScreenProps = {
	brew: Brew;
	ingredients: Ingredients;
};

const DetailScreen: React.FC<DetailScreenProps> = (props) => {
	const renderBrewData = () => {
		Object.keys(props.brew).map((item, i) => {
			return <span key={i}>{item}</span>;
		});
	};

	const renderBrewMetaData = () => {
		if (props.brew) {
			Object.keys(props.brew).map((item, i) => {
				return <span key={i}>{item[i]}</span>;
			});
		} else {
			return <span>{`Brew not found: ${props.brew}`}</span>;
		}
	};

	const renderIngredientsData = () => {
		Object.keys(props.ingredients).map((item, i) => {
			return <span key={i}>{item}</span>;
		});
	};

	const renderIngredientsMetaData = () => {
		Object.keys(props.ingredients).map((item, i) => {
			return <span key={i}>{item[i]}</span>;
		});
	};

	return (
		<div className={styles.container__details}>
			<div className={styles.brew}>
				<h3>Brew:</h3>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Type</TableCell>
								<TableCell>Name</TableCell>
							</TableRow>
						</TableHead>
					</Table>
				</TableContainer>
				<div>{renderBrewMetaData}</div>
				<div>{renderBrewData}</div>
			</div>
			<div className={styles.ingredients}>
				<h3>Ingredients:</h3>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Barley</TableCell>
								<TableCell>Hops</TableCell>
								<TableCell>Yeast</TableCell>
								<TableCell>Extra</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>Caramunich, 3200g</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<div>{renderIngredientsMetaData}</div>
				<div>{renderIngredientsData}</div>
			</div>
		</div>
	);
};

export default DetailScreen;
