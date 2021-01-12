import React, { FC } from 'react';
import LineGraph from '../../../common/graphs/line';
import Box from '@material-ui/core/Box';
import './styles.scss';

const AirlockGraph: FC = () => {
  return (
    <Box className="airlockGraph">
      <LineGraph />
    </Box>
  );
};

export default AirlockGraph;
