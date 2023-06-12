import data from "./cache/herodata.json";

const heroes = {
	data,
	getStats: (name, level) => {
		const base =
			level === 60
				? data[name].calculatedStatus.lv60SixStarFullyAwakened
				: data[name].calculatedStatus.lv50SixStarFullyAwakened;

		return {
			attack: base.atk,
			defense: base.def,
			health: base.hp,
			speed: base.spd,
			"critical hit chance": base.chc,
			"critical hit damage": base.chd,
			effectiveness: base.eff,
			"effect resistance": base.efr,
			"dual attack chance": base.dac,
		};
	},
};

export default heroes;
