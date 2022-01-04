import React, { FC } from 'react';
import { ResponsiveLine, Serie } from '@nivo/line';

type LineGraphProps = {
  data: Serie[];
  xLegend: string;
  yLegend: string;
};

const LineGraph: FC<LineGraphProps> = ({ data, xLegend, yLegend }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      yFormat=" >-.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: xLegend,
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: yLegend,
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'accent' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
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
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: -50,
          translateY: -40,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          itemTextColor: '#eee',
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
