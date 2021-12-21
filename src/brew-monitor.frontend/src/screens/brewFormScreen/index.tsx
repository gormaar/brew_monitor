import React, { FC, Fragment } from 'react';
import { Box, Typography, Tab } from '@material-ui/core';

import Navbar from '../../components/common/navbar';
import './styles.scss';

const BrewFormScreen: FC = () => {
  return (
    <Fragment>
      <Navbar>
        <Tab></Tab>
      </Navbar>
      <Box className="mainContentWrapper">
        <Typography variant="h3" gutterBottom className="formHeader">
          Create brew
        </Typography>
        <Box className="formContainer">
          <Box className="brewForm">
            <h3>Brew</h3>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default BrewFormScreen;
