import React, { FC, Fragment } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

type NavbarProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <Fragment>
      <Appbar style={{ background: '#637381' }} position="sticky">
        <Toolbar>{children}</Toolbar>
      </Appbar>
    </Fragment>
  );
};

export default Navbar;
