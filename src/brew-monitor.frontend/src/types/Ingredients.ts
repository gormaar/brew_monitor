import Barley from './Barley';
import Hops from './Hops';

type Ingredients = {
  id: string;
  barley: Barley[];
  hops: Hops[];
  brewId: string;
};

export default Ingredients;
