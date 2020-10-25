import React, { ReactNode, FC, useState } from "react";
import styles from "./styles.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

type NavbarProps = {
	children: ReactNode | ReactNode[];
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
					{React.Children.map(props.children, (child, index) => {
						return (
							<div
								key={`tabs__${index}`}
								className={styles.navbar__items}
							>
								<Typography>
									{child}
								</Typography>
							</div>
						);
					})}
				</Tabs>
			</AppBar>
		</div>
	);
};

export default Navbar;
