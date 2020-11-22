import React, { FC } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import './styles.scss';

const Status: FC = () => {
  return (
    <Box className="status">
      <h3>Progress</h3>
      <LinearProgress />
    </Box>
  );
};

export default Status;
