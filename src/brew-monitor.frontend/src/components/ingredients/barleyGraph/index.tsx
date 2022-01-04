import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

import { Barley } from '../../../types';
import PieGraph from '../../common/graphs/pie';
import { PieData } from '../../../components/common/graphs/pie';
import './styles.scss';

type BarleyGraphProps = {
  barleyData?: Barley[];
};

export const BarleyGraph: FC<BarleyGraphProps> = ({ barleyData }) => {
  if (!barleyData) {
    return <Box className="barleyGraph"></Box>;
  }
  const data: PieData[] = barleyData.map((barley) => {
    return {
      id: barley.type,
      value: barley.amount,
    };
  });

  const CenteredMetric = () => {
    let total = 0;
    data.forEach((datum) => {
      total += datum.value;
    });

    return (
      <text
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '18px', fontWeight: 600, float: 'right', marginRight: '16px', marginTop: '16px' }}
      >
        {`Total: ${total} g`}
      </text>
    );
  };

  return (
    <Box className="barleyGraph">
      <CenteredMetric />
      <Box height={380}>{data && <PieGraph data={data} />}</Box>
    </Box>
  );
};
