import React, { FC } from 'react';
import LineGraph from '../../../../common/graphs/line';
import Box from '@material-ui/core/Box';
import './styles.scss';

const LongTermAirlockGraph: FC = () => {
  return (
    <Box className="longTermAirlockGraph">
      <LineGraph />
    </Box>
  );
};

export default LongTermAirlockGraph;
