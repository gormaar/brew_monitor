import React, { FC, useEffect } from 'react';
import LineGraph from '../../../../common/graphs/line';
import Box from '@material-ui/core/Box';
import Brew from '../../../../../types/Brew';
import useTemperature from '../../../../../hooks/useTemperature';
import { Serie } from '@nivo/line';
import './styles.scss';

type ShortTermTempGraphProps = {
  activeBrew: Brew;
};

const ShortTermTemperatureGraph: FC<ShortTermTempGraphProps> = ({ activeBrew }) => {
  const { temperatures, fetchTemperatures } = useTemperature();

  // useEffect(() => {
  //   fetchTemperatures(id);
  // }, [activeBrew]);

  if (temperatures === undefined) {
    return null;
  }

  const tempData: Serie[] = [
    {
      id: activeBrew.name,
      data: temperatures.map((temp) => {
        const createdAt = new Date(temp.createdAt).toLocaleDateString('no');
        return { x: createdAt, y: temp.value };
      }),
    },
  ];

  return (
    <Box className="shortTermTemperatureGraph">
      <LineGraph data={tempData} xLegend="date" yLegend="temperature" />
    </Box>
  );
};

export default ShortTermTemperatureGraph;
