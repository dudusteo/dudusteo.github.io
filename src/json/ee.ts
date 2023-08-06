import data from "./cache/eedata.json";

interface EEController {
	data: any;
	getImage: (eeName: string, number: number) => string;
}

const ee = {
	data,
	getImage: (eeName: string, number: number) => {
		const eeInfo = data[eeName];

		console.log(eeName, eeInfo.unit.id);

		return `https://static.smilegatemegaport.com/event/live/epic7/guide/images/skill/sk_${
			eeInfo.unit.id
		}_${eeInfo.skills[number - 1].skill}.png`;
	},
};

export default ee as EEController;
