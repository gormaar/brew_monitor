import { useState, useEffect } from 'react';
import Brew from '../types/Brew';

const header = {
  headers: {
    'Content-type': 'application/json',
  },
};

const useBrew = () => {
  const [brews, setBrews] = useState<Brew[]>([]);
  const [brew, setBrew] = useState<Brew>(brews[-1] ?? null);

  const fetchBrews = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8080/brews`, header).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
      const data = (await response) as Brew[];
      setBrews(data);
    } catch (e) {
      console.log(`Error while fetching brews: ${e}`);
    }
  };

  const fetchBrew = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8080/brew/${brewId}`, header).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
      const data = (await response) as Brew;
      console.log('Res', data);
      setBrew(response);
      console.log('Brew', brew);
    } catch (e) {
      console.log(`Error while fetching brewId ${brewId}: ${e}`);
    }
  };

  useEffect(() => {
    fetchBrews();
  }, []);

  return {
    brew,
    brews,
    fetchBrew,
    fetchBrews,
  };
};

export default useBrew;
