import React, { FC } from 'react';
import { ResponsiveLine } from '@nivo/line';
import GraphData from '../../../../types/GraphData';

type LineGraphProps = {
  data?: GraphData[];
};

const LineGraph: FC = () => {
  const data = [
    {
      id: 'japan',
      color: 'hsl(119, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 249,
        },
        {
          x: 'helicopter',
          y: 205,
        },
        {
          x: 'boat',
          y: 74,
        },
        {
          x: 'train',
          y: 229,
        },
        {
          x: 'subway',
          y: 67,
        },
        {
          x: 'bus',
          y: 2,
        },
        {
          x: 'car',
          y: 230,
        },
        {
          x: 'moto',
          y: 22,
        },
        {
          x: 'bicycle',
          y: 21,
        },
        {
          x: 'horse',
          y: 228,
        },
        {
          x: 'skateboard',
          y: 31,
        },
        {
          x: 'others',
          y: 188,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(68, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 195,
        },
        {
          x: 'helicopter',
          y: 141,
        },
        {
          x: 'boat',
          y: 272,
        },
        {
          x: 'train',
          y: 32,
        },
        {
          x: 'subway',
          y: 31,
        },
        {
          x: 'bus',
          y: 87,
        },
        {
          x: 'car',
          y: 231,
        },
        {
          x: 'moto',
          y: 42,
        },
        {
          x: 'bicycle',
          y: 258,
        },
        {
          x: 'horse',
          y: 73,
        },
        {
          x: 'skateboard',
          y: 22,
        },
        {
          x: 'others',
          y: 85,
        },
      ],
    },
    {
      id: 'us',
      color: 'hsl(249, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 229,
        },
        {
          x: 'helicopter',
          y: 224,
        },
        {
          x: 'boat',
          y: 57,
        },
        {
          x: 'train',
          y: 47,
        },
        {
          x: 'subway',
          y: 171,
        },
        {
          x: 'bus',
          y: 60,
        },
        {
          x: 'car',
          y: 40,
        },
        {
          x: 'moto',
          y: 258,
        },
        {
          x: 'bicycle',
          y: 79,
        },
        {
          x: 'horse',
          y: 148,
        },
        {
          x: 'skateboard',
          y: 88,
        },
        {
          x: 'others',
          y: 192,
        },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(213, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 44,
        },
        {
          x: 'helicopter',
          y: 66,
        },
        {
          x: 'boat',
          y: 79,
        },
        {
          x: 'train',
          y: 148,
        },
        {
          x: 'subway',
          y: 125,
        },
        {
          x: 'bus',
          y: 162,
        },
        {
          x: 'car',
          y: 144,
        },
        {
          x: 'moto',
          y: 35,
        },
        {
          x: 'bicycle',
          y: 166,
        },
        {
          x: 'horse',
          y: 45,
        },
        {
          x: 'skateboard',
          y: 225,
        },
        {
          x: 'others',
          y: 5,
        },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(140, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 170,
        },
        {
          x: 'helicopter',
          y: 297,
        },
        {
          x: 'boat',
          y: 222,
        },
        {
          x: 'train',
          y: 298,
        },
        {
          x: 'subway',
          y: 253,
        },
        {
          x: 'bus',
          y: 37,
        },
        {
          x: 'car',
          y: 256,
        },
        {
          x: 'moto',
          y: 37,
        },
        {
          x: 'bicycle',
          y: 154,
        },
        {
          x: 'horse',
          y: 236,
        },
        {
          x: 'skateboard',
          y: 273,
        },
        {
          x: 'others',
          y: 160,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineGraph;
