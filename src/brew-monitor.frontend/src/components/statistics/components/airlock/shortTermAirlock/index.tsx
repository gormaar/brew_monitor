import React, { FC, useEffect } from 'react';
import LineGraph from '../../../../common/graphs/line';
import Box from '@material-ui/core/Box';
import Respirator from '../../respirator';
import { Datum, Serie } from '@nivo/line';
import useAirlock from '../../../../../hooks/useAirlock';
import './styles.scss';
import Brew from '../../../../../types/Brew';

type ShortTermAirlockProps = {
  activeBrew: Brew;
};

const ShortTermAirlockGraph: FC<ShortTermAirlockProps> = ({ activeBrew }) => {
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
        const createdAt = new Date(airlock.createdAt).toLocaleDateString('no', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        });
        return { x: createdAt, y: airlock.activity };
      }),
    },
  ];

  return (
    <Box className="shortTermAirlockGraph">
      {airlocks[1].activity && <Respirator frequency={airlocks[airlocks.length - 1].activity} />}
      <LineGraph data={airlockData} xLegend="time" yLegend="activity" />
    </Box>
  );
};

export default ShortTermAirlockGraph;
