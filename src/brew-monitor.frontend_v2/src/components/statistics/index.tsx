import React, { FC, Fragment } from 'react';
import Status from './components/status';
import BarleyGraph from './components/barleyGraph';

const Statistics: FC = () => {
  return (
    <Fragment>
      <Status />
      <BarleyGraph />
    </Fragment>
  );
};

export default Statistics;
