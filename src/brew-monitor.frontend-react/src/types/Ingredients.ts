type Barley = {
	id: number;
	type: string;
	amount: number;
};

type Hops = {
	id: number;
	type: string;
	amount: number;
};

type Yeast = {
	id: number;
	type: string;
	amount: number;
};

type Extra = {
	id: number;
	type: string;
	amount: number;
};

type Ingredients = {
	id: number;
	barley: Barley[];
	hops: Hops[];
	yeast: Yeast[];
	extra: Extra[];
	water: number;
};

export default Ingredients;
