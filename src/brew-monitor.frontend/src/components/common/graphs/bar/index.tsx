import React, { FC } from 'react';
import { ResponsiveBar } from '@nivo/bar';

type BarGraphData = {};

type BarGraphProps = {
  data: BarGraphData[];
  xLegend: string;
  yLegend: string;
  keys: string[];
  indexBy: string;
};

const BarGraph: FC<BarGraphProps> = ({ data, xLegend, yLegend, keys, indexBy }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.5}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'accent' }}
      layout="vertical"
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: '#e2e0e0',
            },
            text: {
              fill: '#e2e0e0',
            },
          },
          legend: {
            text: {
              fill: '#e2e0e0',
            },
          },
        },
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 3,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
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
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
          itemTextColor: 'rgb(226, 224, 224)',
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
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
    />
  );
};

export default BarGraph;
