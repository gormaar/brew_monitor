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
    const diff = Math.abs(new Date(activeBrew?.createdAt).getTime() - new Date(Date.now()).getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays >= activeBrew?.fermentationTime) {
      return activeBrew?.fermentationTime;
    }
    return Math.round(diffDays);
  };

  return (
    <Box className="status">
      <h4>
        Fermentation day {calculateProgressDays()}/{activeBrew?.fermentationTime}
      </h4>
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
