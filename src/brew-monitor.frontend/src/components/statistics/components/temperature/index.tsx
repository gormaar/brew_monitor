import React, { FC } from 'react';
import LineGraph from '../../../common/graphs/line';
import Box from '@material-ui/core/Box';
import './styles.scss';

const TemperatureGraph: FC = () => {
  return (
    <Box className="temperatureGraph">
      <LineGraph />
    </Box>
  );
};

export default TemperatureGraph;
