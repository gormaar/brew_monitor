import React, { FC } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import './styles.scss';
import Brew from '../../../../types/Brew';

type StatusProps = {
  activeBrew: Brew;
};

const Status: FC<StatusProps> = ({ activeBrew }) => {
  const calculateProgress = (): number => {
    const brewDate = new Date(activeBrew.createdAt);
    const diff = Math.floor((+Date.now() - +brewDate) / (1000 * 60 * 60 * 24));
    return (diff * 100) / activeBrew.fermentationTime;
  };
  return (
    <Box className="status">
      <h3>Fermentation progress</h3>
      <LinearProgress variant="determinate" value={activeBrew && calculateProgress()} style={{ borderRadius: '2px' }} />
    </Box>
  );
};

export default Status;
