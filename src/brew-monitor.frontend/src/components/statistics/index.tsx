import React, { FC } from 'react';
// import { WidthProvider, Responsive, Layout, Layouts } from 'react-grid-layout';
import Status from './components/status';
import BarleyGraph from '../ingredients/barleyGraph';
import Respirator from './components/respirator';
import HopsGraph from '../ingredients/hopsGraph';
import TemperatureGraph from './components/temperature';
import AirlockGraph from './components/airlock';
import Details from '../details';
import Box from '@material-ui/core/Box';
import './styles.scss';

const Statistics: FC = () => {
  return (
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
  );
};

export default Statistics;
