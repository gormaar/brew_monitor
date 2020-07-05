type Brew = {
	id: number;
	name: string;
	type: string;
	timestamp: Date;
	selected: boolean;
	status: string;
	fermentationDaysLeft: number;
	bottledDaysLeft: number;
	lastActive: Date;
};

export default Brew;
