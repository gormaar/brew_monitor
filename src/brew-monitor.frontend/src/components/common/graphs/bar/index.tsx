import React, { FC } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Serie } from '@nivo/line';

type BarGraphProps = {
  data: Serie[];
  xLegend: string;
  yLegend: string;
};

const BarGraph: FC<BarGraphProps> = ({ data, xLegend, yLegend }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['Pilsner', 'Caramunich', 'Wheat']}
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
        legend: xLegend,
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: yLegend,
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
