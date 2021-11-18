import React, { FC } from 'react';
import { Table, TableRow, TableHead, TableCell, TableContainer } from '@material-ui/core';
import Brew from '../../../types/Brew';
import useBrew from '../../../hooks/useBrew';
import './styles.scss';

type DetailTableProps = {
  activeBrew: Brew;
};

const DetailsTable: FC<DetailTableProps> = ({ activeBrew }) => {
  const { updateBrew } = useBrew();
  const createdAt = new Date(activeBrew?.createdAt).toLocaleDateString('no');

  if (
    new Date(Date.now()).getDate() >= new Date(activeBrew?.createdAt).getDate() + activeBrew?.fermentationTime &&
    activeBrew?.status === 'Active'
  ) {
    console.log('yo', activeBrew?.status);
    activeBrew.status = 'Inactive';
    updateBrew(activeBrew);
  }

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
            <TableCell align="right">{activeBrew?.fermentationTime} days</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Estimated volume</TableCell>
            <TableCell align="right">{activeBrew?.estimatedAmount} liters</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
