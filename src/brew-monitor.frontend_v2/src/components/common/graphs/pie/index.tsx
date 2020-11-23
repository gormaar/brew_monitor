import React, { FC } from 'react';
import GraphData from '../../../../types/GraphData';
import { ResponsivePie } from '@nivo/pie';

type PieData = {
  id: string;
  label: string;
  value: number;
};

type PieGraphProps = {
  data?: GraphData[];
  bottomLegend?: string;
  leftLegend?: string;
};

const PieGraph: FC<PieGraphProps> = ({ bottomLegend, data, leftLegend }) => {
  const testdata = [
    {
      id: 'stylus',
      label: 'stylus',
      value: 406,
      color: 'hsl(218, 70%, 50%)',
    },
    {
      id: 'rust',
      label: 'rust',
      value: 476,
      color: 'hsl(4, 70%, 50%)',
    },
    {
      id: 'ruby',
      label: 'ruby',
      value: 403,
      color: 'hsl(323, 70%, 50%)',
    },
    {
      id: 'java',
      label: 'java',
      value: 234,
      color: 'hsl(129, 70%, 50%)',
    },
    {
      id: 'make',
      label: 'make',
      value: 493,
      color: 'hsl(226, 70%, 50%)',
    },
  ];
  return (
    <ResponsivePie
      data={testdata}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: 'color' }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieGraph;
