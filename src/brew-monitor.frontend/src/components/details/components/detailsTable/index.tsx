import React, { FC } from 'react';
import { Table, TableRow, TableHead, TableCell, TableContainer } from '@material-ui/core';
import './styles.scss';

const DetailsTable: FC = () => {
  return (
    <TableContainer style={{ boxShadow: '2px 2px 5px black' }}>
      <Table className="descriptionTable">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Dead Pony Club</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">Pale Ale</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Brew date</TableCell>
            <TableCell align="right">16.02.21</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Fermentation time</TableCell>
            <TableCell align="right">14 days</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Predicted amound</TableCell>
            <TableCell align="right">20 liters</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
