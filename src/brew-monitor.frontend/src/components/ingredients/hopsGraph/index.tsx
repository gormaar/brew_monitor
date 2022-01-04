import React, { FC } from 'react';
import PieGraph from '../../common/graphs/pie';
import Box from '@material-ui/core/Box';

import { PieData } from '../../../components/common/graphs/pie';
import { Hops } from '../../../types';
import './styles.scss';

type HopsGraphProps = {
  hopsData?: Hops[];
};

export const HopsGraph: FC<HopsGraphProps> = ({ hopsData }) => {
  if (!hopsData) {
    return <Box className="hopsGraph"></Box>;
  }
  const data: PieData[] = hopsData.map((hops) => {
    return {
      id: hops.type,
      value: hops?.amount,
    };
  });
  return (
    <Box className="hopsGraph">
      <PieGraph data={data} />
    </Box>
  );
};
