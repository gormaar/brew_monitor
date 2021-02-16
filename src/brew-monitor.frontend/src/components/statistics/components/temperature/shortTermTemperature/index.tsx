import React, { FC } from 'react';
import LineGraph from '../../../../common/graphs/line';
import Box from '@material-ui/core/Box';
import './styles.scss';

type TemperatureGraphProps = {
  height: number;
  width: number;
};

const ShortTermTemperatureGraph: FC<TemperatureGraphProps> = ({ height, width }) => {
  return (
    <Box className="temperatureGraph" style={{ height: `${height}px`, width: `${width}%` }}>
      <LineGraph />
    </Box>
  );
};

export default ShortTermTemperatureGraph;
