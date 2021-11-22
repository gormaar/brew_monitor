import React, { FC, Fragment, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Statistics from '../../components/statistics';
import Navbar from '../../components/common/navbar';
import BrewSelector from '../../components/common/brewSelctor';
import useBrew from '../../hooks/useBrew';
import useIngredients from '../../hooks/useIngredients';
import useGravity from '../../hooks/useGravity';
import './styles.scss';

type DashBoardParams = {
  brewId: string;
};

const useStyles = makeStyles({
  brewFormButton: {
    position: 'absolute',
    right: 16,
    backgroundColor: '#7fc97f',
    '&:hover': {
      backgroundColor: '#97f097',
    },
  },
});

const DashboardScreen: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { brewId } = useParams<DashBoardParams>();
  const { brew, brews, fetchBrew } = useBrew();
  const { ingredients, fetchIngredients } = useIngredients();
  const { fetchGravity, gravity } = useGravity();

  useEffect(() => {
    if (brewId) {
      fetchIngredients(brewId);
      fetchBrew(brewId);
      fetchGravity(brewId);
    }
  }, [brewId]);

  useEffect(() => {
    if (brews[0]) history.push(`/brew/${brews[0]?.id}`);
  }, [brews]);

  return (
    <Fragment>
      <Navbar>
        {brew && <BrewSelector brews={brews} activeBrew={brew} />}
        {/* <Button type="button" onClick={() => history.push('/brew/create')} className={classes.brewFormButton}>
          Create brew
        </Button> */}
      </Navbar>
      <Box className="dashboard">
        <Box className="dashboard__header">
          <Typography variant="h3" gutterBottom>
            {brew?.name}
          </Typography>
        </Box>
        <Statistics activeBrew={brew} ingredients={ingredients} gravity={gravity} />
      </Box>
    </Fragment>
  );
};

export default DashboardScreen;
