import { useState } from 'react';
import { getBackendBaseUri } from '../constants'
import Gravity from '../types/Gravity';

const useGravity = () => {
  const [gravity, setGravity] = useState<Gravity>();
  const apiBaseUrl = getBackendBaseUri();

  const fetchGravity = async (brewId: string): Promise<void> => {
    const options = { method: 'GET', header: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(`${apiBaseUrl}/gravity/${brewId}`, options).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      });
      const data = (await response.json()) as Gravity;
      setGravity(data);
    } catch (e) {
      console.log(`Error while fetching brews: ${e}`);
    }
  };
  return { gravity, fetchGravity };
};

export default useGravity;
