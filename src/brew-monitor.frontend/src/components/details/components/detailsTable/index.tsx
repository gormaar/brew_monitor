import React, { FC } from 'react';
import { Table, TableRow, TableHead, TableCell, TableContainer } from '@material-ui/core';
import './styles.scss';
import Brew from '../../../../types/Brew';

type DetailTableProps = {
  activeBrew: Brew;
};

const DetailsTable: FC<DetailTableProps> = ({ activeBrew }) => {
  const createdAt = new Date(activeBrew?.createdAt).toLocaleDateString('no');

  return (
    <TableContainer style={{ boxShadow: '2px 2px 5px black' }}>
      <Table className="descriptionTable">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">{activeBrew?.name}</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">{activeBrew?.type}</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell align="right">{activeBrew?.status}</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Brew date</TableCell>
            <TableCell align="right">{createdAt}</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Fermentation time</TableCell>
            <TableCell align="right">{activeBrew?.fermentationTime}</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Predicted amount</TableCell>
            <TableCell align="right">20 liters</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
