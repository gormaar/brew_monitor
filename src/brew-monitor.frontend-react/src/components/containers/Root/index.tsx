import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "../Mainpage";

const Routing: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={""} component={Mainpage}></Route>
				<Route exact path={"/brew/:orgId"}></Route>
			</Switch>
		</Router>
	);
};

export default Routing;
