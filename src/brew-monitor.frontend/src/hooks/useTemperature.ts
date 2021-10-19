import { useState } from 'react';
import { getBackendBaseUri } from '../constants'
import Temperature from '../types/Temperature';

const header = {
  headers: {
    'Content-type': 'application/json',
  },
};

const useTemperature = () => {
  const [temperatures, setTemperatures] = useState<Temperature[]>();
  const apiBaseUrl = getBackendBaseUri();

  const fetchTemperatures = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`${apiBaseUrl}/temperatures/${brewId}`, header).then((response) => {
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
