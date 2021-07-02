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
import Brew from '../../types/Brew';
import Ingredients from '../../types/Ingredients';
import './styles.scss';

type StatisticsProps = {
  activeBrew: Brew;
  ingredients: Ingredients;
};

const Statistics: FC<StatisticsProps> = ({ activeBrew, ingredients }) => {
  //const { barley } = ingredients;
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
        <BarleyGraph barleyData={ingredients.barley!} />
        <LongTermAirlockGraph activeBrew={activeBrew} />
      </Box>

      <Box className="stat-container">
        <LongTermTemperatureGraph activeBrew={activeBrew} />
        <ShortTermTemperatureGraph activeBrew={activeBrew} />
      </Box>

      <Box className="stat-container">
        <HopsGraph />
      </Box>
    </Box>
  );
};

export default Statistics;
