import React, { FC } from 'react';
import Status from './components/status';
import BarleyGraph from '../ingredients/barleyGraph';
import HopsGraph from '../ingredients/hopsGraph';
import ShortTermTemperatureGraph from './components/temperature/shortTermTemperature';
import LongTermTemperatureGraph from './components/temperature/longTermTemperature';
import AirlockGraph from './components/airlock';
import Details from '../details';
import Box from '@material-ui/core/Box';
import './styles.scss';

const Statistics: FC = () => {
  return (
    <Box className="statistics">
      <LongTermTemperatureGraph height={400} width={60} />
      <Status />
      <ShortTermTemperatureGraph height={200} width={35} />
      <Details />

      <AirlockGraph />

      <BarleyGraph />
      <HopsGraph />

      <AirlockGraph />
    </Box>
  );
};

export default Statistics;
