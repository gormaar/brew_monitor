import { useState, useEffect } from 'react';
import Brew from '../types/Brew';

const header = {
  'Content-type': 'application/json',
};

const useBrew = () => {
  const [brews, setBrews] = useState<Brew[]>([]);
  const [brew, setBrew] = useState<Brew>(brews[0]);

  useEffect(() => {
    fetchBrews();
  }, []);

  const fetchBrews = async (): Promise<void> => {
    const options = { method: 'GET', header: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(`http://localhost:8080/brews`, options).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      });
      const data = (await response.json()) as Brew[];
      setBrews(data);
    } catch (e) {
      console.log(`Error while fetching brews: ${e}`);
    }
  };

  const fetchBrew = async (brewId: string): Promise<void> => {
    const options = { method: 'GET', header: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(`http://localhost:8080/brew/${brewId}`, options).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      });
      const data = (await response.json()) as Brew;
      setBrew(data);
    } catch (e) {
      console.log(`Error while fetching brewId ${brewId}: ${e}`);
    }
  }; //#7fc97f rgba(0,0,0,.5)

  const updateBrew = async (brew: Brew): Promise<void> => {
    const options = { method: 'PUT', headers: header, body: JSON.stringify(brew) };
    try {
      await fetch(`http://localhost:8080/brew/update`, options).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      });
    } catch (e) {
      console.log(`Error while updating brewId ${brew.id}: ${e}`);
    }
  };

  return {
    brew,
    brews,
    fetchBrew,
    fetchBrews,
    updateBrew,
  };
};

export default useBrew;
