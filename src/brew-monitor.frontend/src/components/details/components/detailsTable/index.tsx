import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import './styles.scss';

const DetailsTable: FC = () => {
  return (
    <Table className="descriptionTable" style={{ width: '48%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Brew date</TableCell>
          <TableCell>Fermentation time</TableCell>
          <TableCell>Predicted amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Dead Pony Club</TableCell>
          <TableCell>Pale Ale</TableCell>
          <TableCell>16.02.21</TableCell>
          <TableCell>14 days</TableCell>
          <TableCell>20 liters</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DetailsTable;
