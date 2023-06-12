import data from "./cache/artifactdata.json";

Object.entries(data).forEach(([key, value]) => {
	data[key].assets.image =
		key === "Golden Rose"
			? "https://www.e7vau.lt/static/datamine/2023/20230525/item_arti/icon_art0181.png"
			: data[key].assets.image;
});

const artifacts = {
	...data,
};

export default artifacts;
