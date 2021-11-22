import React, { FC } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, makeStyles } from '@material-ui/core';

import Brew from '../../../../types/Brew';
import './styles.scss';

type StatusProps = {
  activeBrew: Brew;
};

const useStyles = makeStyles({
  barColor: {
    backgroundColor: '#7fc97f',
  },
});

const Status: FC<StatusProps> = ({ activeBrew }) => {
  const classes = useStyles();

  const calculateProgress = (): number => {
    const brewDate = new Date(activeBrew?.createdAt);
    const diff = Math.floor((+Date.now() - +brewDate) / (1000 * 60 * 60 * 24));
    let result = (diff * 100) / activeBrew?.fermentationTime;
    if (result >= 100) {
      return 100;
    }
    return result;
  };

  const calculateProgressDays = () => {
    const brewDate = new Date(activeBrew?.createdAt);
    const diff = Math.floor((+Date.now() - +brewDate) / (1000 * 60 * 60 * 24));
    const result = diff / activeBrew?.fermentationTime;
    if (result >= activeBrew?.fermentationTime) {
      return activeBrew?.fermentationTime;
    }
    return Math.round(result);
  };
  
  return (
    <Box className="status">
      <h3>Fermentation progress</h3>
      <h3>
        {calculateProgressDays()}/{activeBrew?.fermentationTime} days
      </h3>
      {activeBrew && (
        <LinearProgress
          variant="determinate"
          value={calculateProgress()}
          color="primary"
          style={{ width: '100%' }}
          classes={{ barColorPrimary: classes.barColor }}
        />
      )}
    </Box>
  );
};

export default Status;
