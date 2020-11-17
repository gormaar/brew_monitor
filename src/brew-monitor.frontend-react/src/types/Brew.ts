type Brew = {
	id: number;
	name: string;
	type: string;
	brewDate: Date;
	selected: boolean;
	status: string;
	fermentationPeriod: number;
	bottledDaysLeft: number;
	lastActive: Date;
	OG: number;
	SG: number;
	FG: number;
	amount: number;
};

export default Brew;
