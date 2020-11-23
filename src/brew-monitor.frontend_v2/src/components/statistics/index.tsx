import React, { FC, Fragment } from 'react';
import Status from './components/status';
import BarleyGraph from '../ingredients/barleyGraph';
import HopsGraph from '../ingredients/hopsGraph';
import TemperatureGraph from './components/temperature';
import AirlockGraph from './components/airlock';
import Details from '../details';
import Box from '@material-ui/core/Box';
import './styles.scss';

const Statistics: FC = () => {
  return (
    <Fragment>
      <Box className="statistics">
        <Details />
        <Status />
        <BarleyGraph />
        <HopsGraph />
        <TemperatureGraph />
        <TemperatureGraph />
        <AirlockGraph />
        <AirlockGraph />
      </Box>
    </Fragment>
  );
};

export default Statistics;
