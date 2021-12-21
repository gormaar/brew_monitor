import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { Serie } from '@nivo/line';

import LineGraph from '../../../../common/graphs/line';

import './styles.scss';
import Temperature from '../../../../../types/Temperature';

type LongTermTempGraphProps = {
  temperatures?: Temperature[];
};

const LongTermTemperatureGraph: FC<LongTermTempGraphProps> = ({ temperatures }) => {
  if (!temperatures) {
    return <Box className="longTermTemperatureGraph"></Box>;
  }

  const longtermTemperatures = temperatures.filter((t) => t.longTermValue !== 0);

  const tempData: Serie[] = [
    {
      id: 'Temperature long term',
      data: longtermTemperatures.map((temp) => {
        const createdAt = new Date(temp.createdAt).toLocaleDateString('no', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
        });
        return { x: createdAt, y: temp.longTermValue };
      }),
    },
  ];

  return (
    <Box className="longTermTemperatureGraph">
      <LineGraph data={tempData} xLegend="Date" yLegend="Temperature" />
    </Box>
  );
};

export default LongTermTemperatureGraph;
