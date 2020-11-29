import { useState, useEffect } from 'react';
import Brew from '../types/Brew';

const header = {
  headers: {
    'Content-type': 'application/json',
  },
};

export default () => {
  const [brews, setBrews] = useState<Brew[]>([]);
  const [activeBrew, setActiveBrew] = useState<Brew>(brews[brews.length - 1]);
  const fetchBrews = async (): Promise<void> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_APIURL}/brews`, header).then((response) => response.json());
      setBrews(response);
    } catch (e) {
      console.log(`Error while fetching brews: ${e}`);
    }
  };

  const fetchBrew = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_APIURL}/brew/${brewId}`, header).then((response) =>
        response.json(),
      );
      setActiveBrew(response);
    } catch (e) {
      console.log(`Error while fetching brewId ${brewId}: ${e}`);
    }
  };

  useEffect(() => {
    fetchBrews();
  }, []);

  return {
    activeBrew,
    brews,
    fetchBrew,
    fetchBrews,
  };
};
