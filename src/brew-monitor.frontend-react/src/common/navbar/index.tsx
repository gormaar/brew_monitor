import React, { ReactNode, FC, useState } from "react";
import styles from "./styles.module.scss";

import { AppBar, Tabs, Tab, Select, FormControl, InputLabel } from '@material-ui/core';
import { Link } from 'react-router-dom'

type NavbarProps = {
	children?: ReactNode | ReactNode[];
};

const Navbar: FC<NavbarProps> = (props) => {

	const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setSelectedTab(newValue);
	}

	return (
		<div className={styles.navbar}>
			<AppBar position="static" color="default">
				<Tabs
					indicatorColor="primary"
					textColor="primary"
					value={selectedTab}
					onChange={handleChange}
					>
					<FormControl>
						<InputLabel>Brews</InputLabel>
						<Select label="Brews" className={styles.navbar__select}>
						</Select>
						</FormControl>
					<Tab label="Statistics">
						<Link to="/:brewId" />
					</Tab>
					<Tab label="Details">
						<Link to="/:brewId/details" />
					</Tab>
					{React.Children.map(props.children, (child, index) => {
						return(
							<Tab key={`tabs__${index}`}>
								{child}
							</Tab>
						)
					})}
				</Tabs>
			</AppBar>
		</div>
	);
};

export default Navbar;
