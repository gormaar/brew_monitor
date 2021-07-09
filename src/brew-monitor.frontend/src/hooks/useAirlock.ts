import { useState } from 'react';
import Airlock from '../types/Airlock';

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
};

const useAirlock = () => {
  const [airlocks, setAirlocks] = useState<Airlock[]>();

  const fetchAirlocks = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8080/airlocks/${brewId}`, options).then((response) => {
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

export default useAirlock;
