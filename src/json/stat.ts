import * as Image from "../img";

const toUpperCaseWord = (text) =>
	text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()).replace(/\s/g, "");

interface StatController {
	getImage: (statName: string) => string;
}

const stat = {
	getImage: (statName: string) => {
		return Image[toUpperCaseWord(statName)];
	},
};

export default stat as StatController;
