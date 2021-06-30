import { useState } from 'react';
import Temperature from '../types/Temperature';

const header = {
  headers: {
    'Content-type': 'application/json',
  },
};

const useTemperature = () => {
  const [temperatures, setTemperatures] = useState<Temperature[]>();

  const fetchTemperatures = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8080/temperatures/${brewId}`, header).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      });
      const data = (await response.json()) as Temperature[];
      setTemperatures(data);
    } catch (e) {
      console.log(`Error while fetching temperatures: ${e}`);
    }
  };

  return {
    temperatures,
    fetchTemperatures,
  };
};

export default useTemperature;
