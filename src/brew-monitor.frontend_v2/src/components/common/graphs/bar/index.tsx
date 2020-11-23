import React, { FC } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import GraphData from '../../../../types/GraphData';

type BarGraphProps = {
  data: GraphData[];
  bottomLegend: string;
  leftLegend: string;
};

const BarGraph: FC<BarGraphProps> = ({ bottomLegend, data, leftLegend }) => {
  const testData = [
    {
      id: 'Respiration',
      data: [
        {
          country: 'AD',
          'hot dog': 133,
          'hot dogColor': 'hsl(278, 70%, 50%)',
          burger: 54,
          burgerColor: 'hsl(96, 70%, 50%)',
          sandwich: 152,
          sandwichColor: 'hsl(1, 70%, 50%)',
          kebab: 135,
          kebabColor: 'hsl(304, 70%, 50%)',
          fries: 96,
          friesColor: 'hsl(158, 70%, 50%)',
          donut: 59,
          donutColor: 'hsl(22, 70%, 50%)',
        },
        {
          country: 'AE',
          'hot dog': 110,
          'hot dogColor': 'hsl(280, 70%, 50%)',
          burger: 138,
          burgerColor: 'hsl(255, 70%, 50%)',
          sandwich: 101,
          sandwichColor: 'hsl(269, 70%, 50%)',
          kebab: 189,
          kebabColor: 'hsl(172, 70%, 50%)',
          fries: 183,
          friesColor: 'hsl(345, 70%, 50%)',
          donut: 126,
          donutColor: 'hsl(198, 70%, 50%)',
        },
      ],
    },
  ];
  return (
    <ResponsiveBar
      data={testData}
      keys={['donut', 'country']}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'wheat',
          color: '#dddada',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'wheat',
          color: '#dddada',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: bottomLegend,
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: leftLegend,
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={'#dddada'}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default BarGraph;
