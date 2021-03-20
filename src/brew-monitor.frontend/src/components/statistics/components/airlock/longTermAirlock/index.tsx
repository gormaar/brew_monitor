import React, { FC, useEffect } from 'react';
import LineGraph from '../../../../common/graphs/line';
import Box from '@material-ui/core/Box';
import './styles.scss';
import useAirlock from '../../../../../hooks/useAirlock';
import { Serie } from '@nivo/line';
import Brew from '../../../../../types/Brew';

type LongTermAirlockGraphProps = {
  activeBrew: Brew;
};

const LongTermAirlockGraph: FC<LongTermAirlockGraphProps> = ({ activeBrew }) => {
  const { airlocks, fetchAirlocks } = useAirlock();

  useEffect(() => {
    fetchAirlocks(activeBrew?.id);
  }, [activeBrew]);

  if (airlocks === undefined) {
    return null;
  }

  const airlockData: Serie[] = [
    {
      id: activeBrew.name,
      data: airlocks.map((airlock) => {
        const createdAt = new Date(airlock.createdAt).toLocaleDateString('no');
        return { x: createdAt, y: airlock.activity };
      }),
    },
  ];

  return (
    <Box className="longTermAirlockGraph">
      <LineGraph data={airlockData} xLegend="date" yLegend="activity" />
    </Box>
  );
};

export default LongTermAirlockGraph;
