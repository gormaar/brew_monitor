import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "../Details";
import MainPage from "../MainPage";
import Statistics from "../Statistics";

const Routing: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={""} component={MainPage} />
				<Route exact path={"/brew/:brewId/statistics"} component={Statistics} />
				<Route exact path={"/brew/:brewId/details"} component={Details} />
			</Switch>
		</Router>
	);
};

export default Routing;
