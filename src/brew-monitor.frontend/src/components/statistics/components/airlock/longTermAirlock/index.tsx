import React, { FC, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Serie } from '@nivo/line';

import LineGraph from '../../../../common/graphs/line';
import useAirlock from '../../../../../hooks/useAirlock';
import Brew from '../../../../../types/Brew';
import './styles.scss';

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

  const longTermActivity = airlocks.filter((a) => a.activityLongterm !== 0);

  const airlockData: Serie[] = [
    {
      id: 'Long term airlock activity',
      data: longTermActivity.map((airlock) => {
        const createdAt = new Date(airlock.createdAt).toLocaleDateString('no', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
        });
        return { x: createdAt, y: airlock.activityLongterm };
      }),
    },
  ];

  return (
    <Box className="longTermAirlockGraph">
      <LineGraph data={airlockData} xLegend="Time" yLegend="Activity" />
    </Box>
  );
};

export default LongTermAirlockGraph;
