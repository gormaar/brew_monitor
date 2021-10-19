import { useState, useEffect } from 'react';
import { getBackendBaseUri } from '../constants'
import Brew from '../types/Brew';

const header = {
  'Content-type': 'application/json',
};

const useBrew = () => {
  const [brews, setBrews] = useState<Brew[]>([]);
  const [brew, setBrew] = useState<Brew>(brews[0]);
  const apiBaseUrl = getBackendBaseUri();

  useEffect(() => {
    fetchBrews();
  }, []);

  const fetchBrews = async (): Promise<void> => {
    const options = { method: 'GET', header: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(`${apiBaseUrl}/brews`, options).then((response) => {
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
      const response = await fetch(`${apiBaseUrl}/brew/${brewId}`, options).then((response) => {
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
  }; 

  const updateBrew = async (brew: Brew): Promise<void> => {
    const options = { method: 'PUT', headers: header, body: JSON.stringify(brew) };
    try {
      await fetch(`${apiBaseUrl}/brew/update`, options).then((response) => {
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
