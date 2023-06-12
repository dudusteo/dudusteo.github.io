import data from "./cache/herodata.json";
import c2102 from "../img/characters/c2102_idle_normal.png";

Object.entries(data).forEach(([key, value]) => {
	data[key].assets.image =
		key === "Requiem Roana" ? c2102 : data[key].assets.image;
});

const characters = {
	...data,
};

export default characters;
