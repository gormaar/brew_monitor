import React, { FC } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

import Brew from '../../../../types/Brew';
import './styles.scss';

type StatusProps = {
  activeBrew: Brew;
};

const Status: FC<StatusProps> = ({ activeBrew }) => {
  const calculateProgress = (): number => {
    const brewDate = new Date(activeBrew?.createdAt);
    const diff = Math.floor((+Date.now() - +brewDate) / (1000 * 60 * 60 * 24));
    let result = (diff * 100) / activeBrew?.fermentationTime;
    if (result >= 100) {
      return 100;
    }
    return result;
  };

  return (
    <Box className="status">
      <h3>Fermentation progress</h3>
      {activeBrew && <LinearProgress variant="determinate" value={calculateProgress()} className="colorPrimary" />}
    </Box>
  );
};

export default Status;
