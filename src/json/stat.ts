import * as Image from "../img";

const toUpperCaseWord = (text) =>
	text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()).replace(/\s/g, "");

const toViewModeText = (text) => {
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

interface StatController {
	getImage: (statName: string) => string;
}

const stat = {
	getImage: (statName: string) => {
		return Image.stat[toUpperCaseWord(toViewModeText(statName))];
	},
};

export default stat as StatController;
