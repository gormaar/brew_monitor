type Barley = {
	type: string;
	amount: number;
};

type Hops = {
	type: string;
	amount: number;
};

type Yeast = {
	type: string;
	amount: number;
};

type Extra = {
	type: string;
	amount: number;
};

type Ingredients = {
	barley: Barley[];
	hops: Hops[];
	yeast: Yeast[];
	extra: Extra[];
	water: number;
};

export default Ingredients;
