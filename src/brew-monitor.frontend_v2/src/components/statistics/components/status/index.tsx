import React, { FC } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import './styles.scss';

const Status: FC = () => {
  return (
    <Box className="status">
      <h3>Fermentation progress</h3>

      <LinearProgress variant="determinate" value={50} style={{ borderRadius: '2px' }} />
    </Box>
  );
};

export default Status;
