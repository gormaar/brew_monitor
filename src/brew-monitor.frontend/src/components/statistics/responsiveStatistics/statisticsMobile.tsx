import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import {
  Status,
  ShortTermAirlockGraph,
  LongTermAirlockGraph,
  LongTermTemperatureGraph,
  ShortTermTemperatureGraph,
  GravityGraph,
} from '../components';
import { BarleyGraph, HopsGraph } from '../../ingredients';
import DetailsTable from '../../details/detailsTable';
import { Airlock, Brew, Gravity, Ingredients, Temperature } from '../../../types';
import '../styles.scss';
import { Mobile } from '../../common/responsive';

type StatisticsMobileProps = {
  activeBrew: Brew;
  airlocks?: Airlock[];
  ingredients: Ingredients;
  temperatures?: Temperature[];
  gravity?: Gravity;
};

const useStyles = makeStyles({
  statContainer: {
    display: 'flex',
    width: '100%',
    height: '100px',
    marginBottom: '32px',
  },
  container: {
    marginTop: '16px',
    width: '100%',
  },
  graphContainer: {
    marginTop: '16px',
    width: '100%',
    height: '430px',
    margin: '0 0 0 0',
  },
});

export const StatisticsMobile: FC<StatisticsMobileProps> = ({
  activeBrew,
  airlocks,
  ingredients,
  temperatures,
  gravity,
}) => {
  const classes = useStyles();
  return (
    <Mobile>
      <Box className="statistics">
        <Status activeBrew={activeBrew} />
        <Box className={classes.container}>
          <DetailsTable activeBrew={activeBrew} />
        </Box>
        <Box className={classes.container}>
          <ShortTermAirlockGraph airlocks={airlocks} />
        </Box>
        <Box className={classes.container}>
          <LongTermAirlockGraph airlocks={airlocks} />
        </Box>
        <Box className={classes.graphContainer}>
          <BarleyGraph barleyData={ingredients.barley} />
        </Box>
        <Box className={classes.graphContainer}>
          <HopsGraph hopsData={ingredients.hops} />
        </Box>
        <Box className={classes.container}>
          <LongTermTemperatureGraph temperatures={temperatures} />
        </Box>
        <Box className={classes.container}>
          <ShortTermTemperatureGraph temperatures={temperatures} />
        </Box>
        <Box className={classes.graphContainer}>
          <GravityGraph gravity={gravity} />
        </Box>
      </Box>
    </Mobile>
  );
};
