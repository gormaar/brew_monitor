import { useState } from 'react';
import Ingredients from '../types/Ingredients';

const header = {
  headers: {
    'Content-type': 'application/json',
  },
};

const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredients>({} as Ingredients);

  const fetchIngredients = async (brewId: string): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:8080/ingredients/${brewId}`, header).then((response) => {
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
