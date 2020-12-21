import React, { FC } from 'react';
import PieGraph from '../../common/graphs/pie';
import Box from '@material-ui/core/Box';
import './styles.scss';

type HopsGraphProps = {
  amount: number;
  type: string;
};

const HopsGraph: FC = () => {
  return (
    <Box className="hopsGraph">
      <PieGraph />
    </Box>
  );
};

export default HopsGraph;
