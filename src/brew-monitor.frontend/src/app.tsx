import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import DashboardScreen from './screens/dashboardScreen';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:brewId" component={DashboardScreen} />
        <Route path="/" component={DashboardScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
