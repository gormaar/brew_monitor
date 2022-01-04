import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import BarGraph from '../../../common/graphs/bar';
import { Gravity } from '../../../../types';
import './styles.scss';

type GravityGraphProps = {
  gravity?: Gravity;
};

export const GravityGraph: FC<GravityGraphProps> = ({ gravity }) => {
  const gravityData = [
    {
      gravity: 'SG',
      SG: 1.062,
    },
    {
      gravity: 'TargetSG',
      TargetSG: 1.09,
    },
    {
      gravity: 'OG',
      OG: 1.058,
    },
    {
      gravity: 'TargetOG',
      TargetOG: gravity?.targetOG,
    },
    {
      gravity: 'FG',
      FG: 1.031,
    },
    {
      gravity: 'TargetFG',
      TargetFG: gravity?.targetFG,
    },
  ];

  return (
    <Box className="gravityGraph">
      {gravity && (
        <BarGraph
          data={gravityData}
          xLegend="Value"
          yLegend="Gravity"
          keys={['SG', 'TargetSG', 'OG', 'TargetOG', 'FG', 'TargetFG']}
          indexBy="gravity"
        />
      )}
    </Box>
  );
};
