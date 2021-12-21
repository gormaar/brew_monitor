import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { Serie } from '@nivo/line';

import LineGraph from '../../../../common/graphs/line';
import './styles.scss';
import Temperature from '../../../../../types/Temperature';

type ShortTermTempGraphProps = {
  temperatures?: Temperature[];
};

const ShortTermTemperatureGraph: FC<ShortTermTempGraphProps> = ({ temperatures }) => {
  if (!temperatures) {
    return <Box className="shortTermTemperatureGraph"></Box>;
  }

  const recentTemperature = temperatures.slice(Math.max(temperatures.length - 12, 1));

  const tempData: Serie[] = [
    {
      id: 'Temperature short term',
      data: recentTemperature.map((temp) => {
        const createdAt = new Date(temp.createdAt).toTimeString().slice(0, 8);
        return { x: createdAt, y: temp.value };
      }),
    },
  ];

  return (
    <Box className="shortTermTemperatureGraph">
      <LineGraph data={tempData} xLegend="Date" yLegend="Temperature" />
    </Box>
  );
};

export default ShortTermTemperatureGraph;
