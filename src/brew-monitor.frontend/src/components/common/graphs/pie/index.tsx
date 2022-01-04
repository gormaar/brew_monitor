import React, { FC } from 'react';
import { ResponsivePie } from '@nivo/pie';

export type PieData = {
  id: string | number;
  value: number;
};

type PieGraphProps = {
  data: PieData[];
};

const PieGraph: FC<PieGraphProps> = ({ data }) => {
  const commonProperties = {
    margin: { top: 80, right: 120, bottom: 80, left: 120 },
    data: data.map(({ id, ...d }) => ({ id, ...d })),
    animate: true,
    activeOuterRadiusOffset: 8,
  };
  const legends = [
    {
      anchor: 'bottom' as const,
      direction: 'row' as const,
      toggleSerie: true,
      translateY: 56,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: '#999',
      symbolSize: 18,
      symbolShape: 'circle' as const,
      effects: [
        {
          on: 'hover' as const,
          style: {
            itemTextColor: '#000',
          },
        },
      ],
    },
  ];

  return (
    <ResponsivePie
      {...commonProperties}
      margin={{ top: 40, right: 90, bottom: 80, left: 80 }}
      colors={{ scheme: 'accent' }}
      innerRadius={0.5}
      padAngle={0.5}
      cornerRadius={5}
      arcLinkLabelsColor={{
        from: 'color',
      }}
      arcLinkLabelsThickness={3}
      arcLinkLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 1.2]],
      }}
      valueFormat={(value) => `${Number(value).toLocaleString('no-NO')} g`}
      legends={legends}
    />
  );
};

export default PieGraph;
