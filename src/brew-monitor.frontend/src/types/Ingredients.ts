import { Barley } from './Barley';
import { Hops } from './Hops';

export type Ingredients = {
  id: string;
  barley: Barley[];
  hops: Hops[];
  brewId: string;
};
