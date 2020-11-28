import React, { FC, Fragment } from 'react';
import { useParams } from 'react-router';
import Statistics from '../../components/statistics';
import Navbar from '../../components/common/navbar';
import Box from '@material-ui/core/Box';
import Respirator from '../../components/statistics/components/respirator';
import Typography from '@material-ui/core/Typography';
import BrewSelector from '../../components/common/select';
import './styles.scss';

type DashBoardParams = {
  brewId: string;
};

const DashboardScreen: FC = () => {
  const { brewId } = useParams<DashBoardParams>();
  return (
    <Fragment>
      <Navbar>
        <BrewSelector brews={} />
      </Navbar>
      <Box className="dashboard">
        <Box className="dashboard__header">
          <Typography variant="h3" gutterBottom>
            Name placeholder
          </Typography>
          <Respirator frequency={100} />
        </Box>
        <Statistics />
      </Box>
    </Fragment>
  );
};

export default DashboardScreen;
