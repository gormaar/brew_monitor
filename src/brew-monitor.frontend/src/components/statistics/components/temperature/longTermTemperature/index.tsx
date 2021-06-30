import React, { FC, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Serie } from '@nivo/line';

import LineGraph from '../../../../common/graphs/line';
import Brew from '../../../../../types/Brew';
import useTemperature from '../../../../../hooks/useTemperature';
import './styles.scss';

type LongTermTempGraphProps = {
  activeBrew: Brew;
};

const LongTermTemperatureGraph: FC<LongTermTempGraphProps> = ({ activeBrew }) => {
  const { temperatures, fetchTemperatures } = useTemperature();

  useEffect(() => {
    fetchTemperatures(activeBrew?.id);
  }, [activeBrew]);

  if (!temperatures) {
    return null;
  }

  const tempData: Serie[] = [
    {
      id: activeBrew.name,
      data: temperatures.map((temp) => {
        const createdAt = new Date(temp.createdAt).toLocaleDateString('no', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
        });
        return { x: createdAt, y: temp.value };
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
