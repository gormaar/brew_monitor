import React, { FC, Fragment } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Select from '../select';

const Navbar: FC = () => {
  return (
    <Fragment>
      <Appbar style={{ background: '#808080' }} position="sticky">
        <Toolbar>
          <Select />
        </Toolbar>
      </Appbar>
    </Fragment>
  );
};

export default Navbar;
