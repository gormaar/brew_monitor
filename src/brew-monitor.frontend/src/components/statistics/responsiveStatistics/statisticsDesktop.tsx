import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { BarleyGraph, HopsGraph } from '../../ingredients';
import {
  Status,
  ShortTermTemperatureGraph,
  LongTermTemperatureGraph,
  ShortTermAirlockGraph,
  LongTermAirlockGraph,
  GravityGraph,
} from '../components';
import DetailsTable from '../../details/detailsTable';
import { Airlock, Brew, Gravity, Ingredients, Temperature } from '../../../types';
import '../styles.scss';
import { Desktop } from '../../common/responsive';

type StatisticsDesktopProps = {
  activeBrew: Brew;
  airlocks?: Airlock[];
  ingredients: Ingredients;
  temperatures?: Temperature[];
  gravity?: Gravity;
};

const useStyles = makeStyles({
  container: {
    width: '60%',
  },
  chart: {
    width: '30%',
    height: '100%',
  },
});

export const StatisticsDesktop: FC<StatisticsDesktopProps> = ({
  activeBrew,
  airlocks,
  ingredients,
  temperatures,
  gravity,
}) => {
  const classes = useStyles();
  return (
    <Desktop>
      <Box className="statistics">
        <Box className="stat-container">
          <Box className="description">
            <Status activeBrew={activeBrew} />
            <DetailsTable activeBrew={activeBrew} />
          </Box>
          <Box className={classes.container}>
            <ShortTermAirlockGraph airlocks={airlocks} />
          </Box>
        </Box>

        <Box className="stat-container">
          <Box className={classes.chart}>
            <BarleyGraph barleyData={ingredients.barley} />
          </Box>
          <Box className={classes.container}>
            <LongTermAirlockGraph airlocks={airlocks} />
          </Box>
        </Box>

        <Box className="stat-container">
          <Box className={classes.chart}>
            <HopsGraph hopsData={ingredients.hops} />
          </Box>
          <Box className={classes.container}>
            <LongTermTemperatureGraph temperatures={temperatures} />
          </Box>
        </Box>

        <Box className="stat-container">
          <Box className={classes.chart}>
            <GravityGraph gravity={gravity} />
          </Box>
          <Box className={classes.container}>
            <ShortTermTemperatureGraph temperatures={temperatures} />
          </Box>
        </Box>
      </Box>
    </Desktop>
  );
};
