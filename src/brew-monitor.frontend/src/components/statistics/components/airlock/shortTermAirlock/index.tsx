import React, { FC, useEffect } from 'react';
import { Serie } from '@nivo/line';
import Box from '@material-ui/core/Box';

import LineGraph from '../../../../common/graphs/line';
import Respirator from '../../respirator';
import useAirlock from '../../../../../hooks/useAirlock';
import Brew from '../../../../../types/Brew';
import './styles.scss';

type ShortTermAirlockProps = {
  activeBrew: Brew;
};

const ShortTermAirlockGraph: FC<ShortTermAirlockProps> = ({ activeBrew }) => {
  const { airlocks, fetchAirlocks } = useAirlock();

  useEffect(() => {
    if (activeBrew?.id) {
      fetchAirlocks(activeBrew?.id);
    }
  }, [activeBrew]);

  if (airlocks === undefined) {
    return null;
  }

  const recentAirlocks = airlocks.slice(Math.max(airlocks.length - 12, 1));

  const airlockData: Serie[] = [
    {
      id: 'Short term airlock activity',
      data: recentAirlocks.map((airlock) => {
        const createdAt = new Date(airlock.createdAt).toTimeString().slice(0, 8);
        return { x: createdAt, y: airlock.activity };
      }),
    },
  ];

  return (
    <Box className="shortTermAirlockGraph">
      {airlocks[1]?.activity && <Respirator frequency={airlocks[airlocks.length - 1].activity} />}
      <LineGraph data={airlockData} xLegend="Time" yLegend="Activity" />
    </Box>
  );
};

export default ShortTermAirlockGraph;
