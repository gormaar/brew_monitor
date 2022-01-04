import { useState } from 'react';
import { getBackendBaseUri } from '../constants';
import { Airlock } from '../types';

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
};

export const useAirlock = () => {
  const [airlocks, setAirlocks] = useState<Airlock[]>();
  const apiBaseUrl = getBackendBaseUri();

  const fetchAirlocks = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`${apiBaseUrl}/airlocks/${brewId}`, options).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      });
      const data = (await response.json()) as Airlock[];
      setAirlocks(data);
    } catch (e) {
      console.log(`Error while fetching brews: ${e}`);
    }
  };

  return {
    airlocks,
    fetchAirlocks,
  };
};
