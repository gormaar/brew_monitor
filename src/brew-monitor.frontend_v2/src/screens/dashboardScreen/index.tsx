import React, { FC, Fragment } from 'react';
import Statistics from '../../components/statistics';
import Navbar from '../../components/common/navbar';
import Box from '@material-ui/core/Box';
import Respirator from '../../components/statistics/components/respirator';
import Typography from '@material-ui/core/Typography';
import BrewSelector from '../../components/common/select';
import './styles.scss';

const DashboardScreen: FC = () => {
  return (
    <Fragment>
      <Navbar>
        <BrewSelector />
      </Navbar>
      <Box className="dashboard">
        <Typography variant="h3" gutterBottom>
          Name placeholder
        </Typography>
        <Respirator frequency={100} />
        <Statistics />
      </Box>
    </Fragment>
  );
};

export default DashboardScreen;
