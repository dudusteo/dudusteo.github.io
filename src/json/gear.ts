import * as Image from "../img";

interface GearController {
	getSetImage: (setName: string) => string;
}

const gear = {
	getSetImage: (setName: string) => {
		return Image.set[setName.toLowerCase()];
	},
};

export default gear as GearController;
