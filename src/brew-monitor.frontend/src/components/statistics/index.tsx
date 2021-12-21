import React, { FC, useEffect } from 'react';
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
import './styles.scss';
import useIngredients from '../../hooks/useIngredients';
import useGravity from '../../hooks/useGravity';
import useTemperature from '../../hooks/useTemperature';
import useAirlock from '../../hooks/useAirlock';

type StatisticsProps = {
  activeBrew: Brew;
};

const Statistics: FC<StatisticsProps> = ({ activeBrew }) => {
  const { ingredients, fetchIngredients } = useIngredients();
  const { gravity, fetchGravity } = useGravity();
  const { temperatures, fetchTemperatures } = useTemperature();
  const { airlocks, fetchAirlocks } = useAirlock();

  useEffect(() => {
    if (activeBrew?.id) {
      fetchIngredients(activeBrew?.id);
      fetchGravity(activeBrew?.id);
      fetchTemperatures(activeBrew?.id);
      fetchAirlocks(activeBrew?.id);
    }
  }, [activeBrew]);

  return (
    <Box className="statistics">
      <Box className="stat-container">
        <Box className="description">
          <Status activeBrew={activeBrew} />
          <DetailsTable activeBrew={activeBrew} />
        </Box>
        <ShortTermAirlockGraph airlocks={airlocks} />
      </Box>

      <Box className="stat-container">
        <BarleyGraph barleyData={ingredients.barley} />
        <LongTermAirlockGraph airlocks={airlocks} />
      </Box>

      <Box className="stat-container">
        <HopsGraph hopsData={ingredients.hops} />
        <LongTermTemperatureGraph temperatures={temperatures} />
      </Box>

      <Box className="stat-container">
        <GravityGraph gravity={gravity} />
        <ShortTermTemperatureGraph temperatures={temperatures} />
      </Box>
    </Box>
  );
};

export default Statistics;
