import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import DashboardScreen from './screens/dashboardScreen';
import BrewFormScreen from './screens/brewFormScreen';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/brew/create" component={BrewFormScreen} />
        <Route path="/brew/:brewId" component={DashboardScreen} />
        <Route path="" component={DashboardScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
