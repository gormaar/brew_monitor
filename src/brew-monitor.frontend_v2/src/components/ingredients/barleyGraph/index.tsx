import React, { FC } from 'react';
import GraphData from '../../../types/GraphData';
import BarGraph from '../../common/graphs/bar';

type BarleyType = {
  name: string;
  amount: number;
};

const BarleyGraph: FC = () => {
  var barleyA: BarleyType = {
    name: 'Caramunich',
    amount: 3600,
  };

  var barleyB: BarleyType = {
    name: 'Pilsner',
    amount: 4000,
  };

  var barleyC = {
    name: 'Wheat',
    amount: 1900,
  };
  const mockDataFromApi = [barleyA, barleyB, barleyC];

  const barleyData: GraphData[] = [
    {
      id: 'Barley',
      data: mockDataFromApi.map((item) => ({ x: item.name, y: item.amount })),
    },
  ];

  return <BarGraph data={barleyData} bottomLegend="Barley type" leftLegend="Grams" />;
};

export default BarleyGraph;
