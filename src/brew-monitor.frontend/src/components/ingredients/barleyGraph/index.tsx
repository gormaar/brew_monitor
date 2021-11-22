import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Barley from '../../../types/Barley';
import PieGraph from '../../common/graphs/pie';
import { PieData } from '../../../components/common/graphs/pie';
import './styles.scss';

type BarleyGraphProps = {
  barleyData?: Barley[];
};

const BarleyGraph: FC<BarleyGraphProps> = ({ barleyData }) => {

  if (!barleyData) {
    return <Box className="barleyGraph"></Box>
  }
  const data: PieData[] = barleyData.map((barley) => {
    return {
      id: barley.type,
      value: barley.amount,
    };
  });

  return (
  <Box className="barleyGraph">
    {data && <PieGraph data={data} />}
  </Box>
  );
};

export default BarleyGraph;
