import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

import Status from './components/status';
import BarleyGraph from '../ingredients/barleyGraph';
import HopsGraph from '../ingredients/hopsGraph';
import ShortTermTemperatureGraph from './components/temperature/shortTermTemperature';
import LongTermTemperatureGraph from './components/temperature/longTermTemperature';
import DetailsTable from '../details/detailsTable';
import ShortTermAirlockGraph from './components/airlock/shortTermAirlock';
import LongTermAirlockGraph from './components/airlock/longTermAirlock';
import GravityGraph from './components/gravity';
import Brew from '../../types/Brew';
import Ingredients from '../../types/Ingredients';
import './styles.scss';
import Gravity from '../../types/Gravity';

type StatisticsProps = {
  activeBrew: Brew;
  ingredients: Ingredients;
  gravity?: Gravity;
};

const Statistics: FC<StatisticsProps> = ({ activeBrew, gravity, ingredients }) => {
  return (
    <Box className="statistics">
      <Box className="stat-container">
        <Box className="description">
          <Status activeBrew={activeBrew} />
          <DetailsTable activeBrew={activeBrew} />
        </Box>
        <ShortTermAirlockGraph activeBrew={activeBrew} />
      </Box>

      <Box className="stat-container">
        <BarleyGraph barleyData={ingredients.barley} />
        <LongTermAirlockGraph activeBrew={activeBrew} />
      </Box>

      <Box className="stat-container">
        <HopsGraph hopsData={ingredients.hops} />
        <LongTermTemperatureGraph activeBrew={activeBrew} />
      </Box>

      <Box className="stat-container">
        <GravityGraph gravity={gravity} />
        <ShortTermTemperatureGraph activeBrew={activeBrew} />
      </Box>
    </Box>
  );
};

export default Statistics;
