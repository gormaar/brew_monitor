import React, { FC, Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Statistics from '../../components/statistics';
import Navbar from '../../components/common/navbar';
import Box from '@material-ui/core/Box';
import Respirator from '../../components/statistics/components/respirator';
import Typography from '@material-ui/core/Typography';
import BrewSelector from '../../components/common/select';
import useBrew from '../../hooks/useBrew';
import './styles.scss';
import Brew from '../../types/Brew';

type DashBoardParams = {
  brewId: string;
};

const DashboardScreen: FC = () => {
  const { brewId } = useParams<DashBoardParams>();
  const { activeBrew, brews, fetchBrews, fetchBrew } = useBrew();
  const [active, setActiveBrew] = useState<Brew>();

  useEffect(() => {
    const newBrew = fetchBrew(brewId);
    setActiveBrew(newBrew);
  }, [brewId]);

  return (
    <Fragment>
      <Navbar>
        <BrewSelector brews={brews} activeBrew={active} />
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
