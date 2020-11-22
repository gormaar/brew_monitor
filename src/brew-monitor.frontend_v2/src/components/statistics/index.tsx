import React, { FC, Fragment } from 'react';
import Status from './components/status';
import BarleyGraph from '../ingredients/barleyGraph';
import Details from '../details';
import Box from '@material-ui/core/Box';
import './styles.scss';

const Statistics: FC = () => {
  return (
    <Fragment>
      <Box className="statistics">
        <Details />
        <Status />
        {/* <BarleyGraph /> */}
      </Box>
    </Fragment>
  );
};

export default Statistics;
