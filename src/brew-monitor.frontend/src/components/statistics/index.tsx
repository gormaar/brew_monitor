import React, { FC } from 'react';
import Status from './components/status';
import BarleyGraph from '../ingredients/barleyGraph';
import HopsGraph from '../ingredients/hopsGraph';
import ShortTermTemperatureGraph from './components/temperature/shortTermTemperature';
import LongTermTemperatureGraph from './components/temperature/longTermTemperature';
import Details from '../details';
import Box from '@material-ui/core/Box';
import './styles.scss';
import ShortTermAirlockGraph from './components/airlock/shortTermAirlock';
import LongTermAirlockGraph from './components/airlock/longTermAirlock';

const Statistics: FC = () => {
  return (
    <Box className="statistics">
      <Box className="stat-container">
        <Box className="description">
          <Status />
          <Details />
        </Box>
        <ShortTermAirlockGraph />
      </Box>

      <Box className="stat-container">
        <BarleyGraph />
        <LongTermAirlockGraph />
      </Box>

      <Box className="stat-container">
        <LongTermTemperatureGraph />
        <ShortTermTemperatureGraph />
      </Box>

      <Box className="stat-container">
        <HopsGraph />
      </Box>
    </Box>
  );
};

export default Statistics;
