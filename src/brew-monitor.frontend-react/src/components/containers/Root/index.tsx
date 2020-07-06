import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../MainPage";

const Routing: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={""} component={MainPage}></Route>
				<Route exact path={"/brew/:orgId"}></Route>
			</Switch>
		</Router>
	);
};

export default Routing;
