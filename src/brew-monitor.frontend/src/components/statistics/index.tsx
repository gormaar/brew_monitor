import React, { FC, Fragment, useEffect } from 'react';

import { Brew } from '../../types';
import { useAirlock, useTemperature, useGravity, useIngredients } from '../../hooks';
import { StatisticsDesktop, StatisticsMobile } from './responsiveStatistics';
import './styles.scss';

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
    <Fragment>
      <StatisticsMobile
        activeBrew={activeBrew}
        airlocks={airlocks}
        gravity={gravity}
        ingredients={ingredients}
        temperatures={temperatures}
      />

      <StatisticsDesktop
        activeBrew={activeBrew}
        airlocks={airlocks}
        gravity={gravity}
        ingredients={ingredients}
        temperatures={temperatures}
      />
    </Fragment>
  );
};

export default Statistics;
