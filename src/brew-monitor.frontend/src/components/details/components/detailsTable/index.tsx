import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import './styles.scss';

const DetailsTable: FC = () => {
  return (
    <TableContainer style={{ boxShadow: '2px 2px 5px black' }}>
      <Table className="descriptionTable">
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Dead Pony Club</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell align="right">Pale Ale</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Brew date</TableCell>
          <TableCell align="right">16.02.21</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fermentation time</TableCell>
          <TableCell align="right">14 days</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Predicted amound</TableCell>
          <TableCell align="right">20 liters</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
