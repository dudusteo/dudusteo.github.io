import * as Image from "../img";

const toUpperCaseWord = (text: string) =>
	text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()).replace(/\s/g, "");

const toViewModeText = (text: string) => {
	const map = {
		atk: "attack",
		def: "defense",
		hp: "health",
		spd: "speed",
		chc: "critical hit chance",
		chd: "critical hit damage",
		eff: "effectiveness",
		efr: "effect resistance",
		dac: "dual attack chance",
	};

	return map[text] ? map[text] : text;
};

const createUniversalNotation = (key) => {
	const formattingFunctions = {
		att: (statValue) => parseInt(statValue),
		def: (statValue) => parseInt(statValue),
		hp: (statValue) => parseInt(statValue),
		spd: (statValue) => parseInt(statValue),
		chc: (statValue) => (statValue * 100).toFixed(1) + "%",
		chd: (statValue) => (statValue * 100).toFixed(1) + "%",
		eff: (statValue) => (statValue * 100).toFixed(1) + "%",
		efr: (statValue) => (statValue * 100).toFixed(1) + "%",
		dac: (statValue) => (statValue * 100).toFixed(1) + "%",
	};

	return formattingFunctions[key] || ((statValue) => statValue);
};

interface StatController {
	getFormattedStats: (stats: Stats) => FormattedStats;
	getImage: (statName: string) => string;
}

const stat = {
	getFormattedStats: (stats: Stats) => {
		const formattedStats = {};

		Object.entries(stats).forEach(([key, value]) => {
			const formatFunction = createUniversalNotation(key);
			formattedStats[key] = formatFunction(value);
		});
		return formattedStats;
	},
	getImage: (statName: string) => {
		return Image.stat[toUpperCaseWord(toViewModeText(statName))];
	},
};

export default stat as StatController;
