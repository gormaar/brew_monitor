import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { Serie } from '@nivo/line';

import LineGraph from '../../../../common/graphs/line';

import './styles.scss';
import Airlock from '../../../../../types/Airlock';

type LongTermAirlockGraphProps = {
  airlocks?: Airlock[];
};

const LongTermAirlockGraph: FC<LongTermAirlockGraphProps> = ({ airlocks }) => {
  if (airlocks === undefined) {
    return <Box className="longTermAirlockGraph"></Box>;
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
