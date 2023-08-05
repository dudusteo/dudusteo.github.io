import * as Image from "../img";

interface GearController {
	getSetImage: (setName: string) => string;
}

const gear = {
	getSetImage: (setName: string) => {
		return Image.set[setName];
	},
};

export default gear as GearController;
