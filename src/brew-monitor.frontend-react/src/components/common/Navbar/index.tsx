import React, { ReactNode, FC } from "react";
import styles from "./styles.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

type NavbarProps = {
	children: ReactNode | ReactNode[];
};

const Navbar: FC<NavbarProps> = (props) => {
	return (
		<div className={styles.navbar}>
			<AppBar position="static" color="default">
				<Tabs
					aria-label="simple tabs example"
					indicatorColor="primary"
					textColor="primary"
				>
					{React.Children.map(props.children, (child, index) => {
						return (
							<Tab key={`tabs__${index}`} label={child}>
								{child}
							</Tab>
						);
					})}
				</Tabs>
			</AppBar>
		</div>
	);
};

export default Navbar;
