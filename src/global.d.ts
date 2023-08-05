interface Artifact {
	name: string;
	enhance: number;
}

interface Hero {
	name: string;
	grade: string | null;
	ee: number | null;
}

interface Stat {
	type: string;
	value: number;
}

interface Item {
	enhance: number;
	level: number;
	rank: string;
	main: Stat;
	substats: Stat[];
}

interface Stats {
	atk: number;
	def: number;
	hp: number;
	spd: number;
	chc: number;
	chd: number;
	eff: number;
	efr: number;
	dac: number;
}
