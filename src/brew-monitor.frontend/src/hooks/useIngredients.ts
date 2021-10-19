import { useState } from 'react';
import { getBackendBaseUri } from '../constants'
import Ingredients from '../types/Ingredients';

const header = {
  headers: {
    'Content-type': 'application/json',
  },
};

const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredients>({} as Ingredients);
  const apiBaseUrl = getBackendBaseUri();

  const fetchIngredients = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`${apiBaseUrl}/ingredients/${brewId}`, header).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      });
      const data = (await response.json()) as Ingredients;
      setIngredients(data);
    } catch (e) {
      console.log(`Error while fetching ingredients: ${e}`);
    }
  };

  return {
    ingredients,
    fetchIngredients,
  };
};

export default useIngredients;
