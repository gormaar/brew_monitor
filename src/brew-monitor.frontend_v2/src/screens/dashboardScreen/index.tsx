import React, { FC, Fragment } from 'react';
import Statistics from '../../components/statistics';
import Navbar from '../../components/common/navbar';
import Box from '@material-ui/core/Box';
import './styles.scss';

const DashboardScreen: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Box className="dashboard">
        <h1>Name placeholder</h1>
        <Statistics />
      </Box>
    </Fragment>
  );
};

export default DashboardScreen;
