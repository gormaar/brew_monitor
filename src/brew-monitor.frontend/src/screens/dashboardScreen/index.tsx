import React, { FC, Fragment, useEffect } from 'react';
import { useParams } from 'react-router';
import Statistics from '../../components/statistics';
import Navbar from '../../components/common/navbar';
import { Box, Typography } from '@material-ui/core';
import BrewSelector from '../../components/common/select';
import useBrew from '../../hooks/useBrew';
import './styles.scss';

type DashBoardParams = {
  brewId: string;
};

const DashboardScreen: FC = () => {
  const { brewId } = useParams<DashBoardParams>();
  const { brew, brews, fetchBrews, fetchBrew } = useBrew();

  useEffect(() => {
    fetchBrews();
    fetchBrew(brewId);
  }, [brewId]);

  return (
    <Fragment>
      <Navbar>
        <BrewSelector brews={brews} activeBrew={brew} />
      </Navbar>
      <Box className="dashboard">
        <Box className="dashboard__header">
          <Typography variant="h3" gutterBottom>
            {brew?.name}
          </Typography>
        </Box>
        <Statistics activeBrew={brew} />
      </Box>
    </Fragment>
  );
};

export default DashboardScreen;
