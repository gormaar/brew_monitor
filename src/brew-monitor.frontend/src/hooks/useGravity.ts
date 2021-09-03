import { useState } from 'react';
import Gravity from '../types/Gravity';

const useGravity = () => {
  const [gravity, setGravity] = useState<Gravity>();

  const fetchGravity = async (brewId: string): Promise<void> => {
    const options = { method: 'GET', header: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(`http://localhost:8080/gravity/${brewId}`, options).then((response) => {
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
