import React, { FC } from 'react';
// import GraphData from '../../../types/GraphData';
import BarGraph from '../../common/graphs/bar';
import Box from '@material-ui/core/Box';
import './styles.scss';

// type BarleyType = {
//   name: string;
//   amount: number;
// };

const BarleyGraph: FC = () => {
  // var barleyA: BarleyType = {
  //   name: 'Caramunich',
  //   amount: 3600,
  // };

  // var barleyB: BarleyType = {
  //   name: 'Pilsner',
  //   amount: 4000,
  // };

  // var barleyC = {
  //   name: 'Wheat',
  //   amount: 1900,
  // };
  // const mockDataFromApi = [barleyA, barleyB, barleyC];

  // const barleyData: GraphData[] = [
  //   {
  //     id: 'Barley',
  //     data: mockDataFromApi.map((item) => ({ x: item.name, y: item.amount })),
  //   },
  // ];

  const testData = [
    {
      id: 'Barley',
      data: [
        {
          x: 'Caramunich',
          y: 3600,
        },
        {
          x: 'Pilsner',
          y: 4000,
        },
        {
          x: 'Wheat',
          y: 1900,
        },
      ],
    },
  ];

  return (
    <Box className="barleyGraph">
      <BarGraph data={testData} bottomLegend="Barley type" leftLegend="Grams" />
    </Box>
  );
};

export default BarleyGraph;
