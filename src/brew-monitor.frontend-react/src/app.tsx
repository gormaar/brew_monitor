import React, {FC} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Statistics from './screens/statistic';
import DetailScreen from './screens/detail';

const App: FC = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route to="/:brewId" component={Statistics}/>
            <Route to="/:brewId/details" component={DetailScreen} />
        </Switch>
        </BrowserRouter>
        
    )
}

export default App;