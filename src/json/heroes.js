import data from "./cache/herodata.json";

const imprintMap = {
	cri: "Critical Hit Chance",
};

const heroes = {
	data,
	getImprintStats: (heroName, heroGrade) => {
		return {
			type: imprintMap[data[heroName].self_devotion.type],
			value: data[heroName].self_devotion.grades[heroGrade],
		};
	},
	getImprintOptions: (name) => {
		const imprintOptions = [{ label: "Locked", value: 0, grade: "N" }];
		Object.entries(data[name].self_devotion.grades).forEach(
			([key, value]) => {
				imprintOptions.push({
					label:
						key +
						" " +
						imprintMap[data[name].self_devotion.type] +
						" " +
						(value * 100).toFixed(1),
					value: value,
					type: imprintMap[data[name].self_devotion.type],
					grade: key,
				});
			}
		);
		return imprintOptions;
	},
	getBaseStats: (name, level) => {
		const baseStats =
			level === 60
				? data[name].calculatedStatus.lv60SixStarFullyAwakened
				: data[name].calculatedStatus.lv50SixStarFullyAwakened;

		return {
			attack: baseStats.atk,
			defense: baseStats.def,
			health: baseStats.hp,
			speed: baseStats.spd,
			"critical hit chance": baseStats.chc,
			"critical hit damage": baseStats.chd,
			effectiveness: baseStats.eff,
			"effect resistance": baseStats.efr,
			"dual attack chance": baseStats.dac,
		};
	},

	getBonusStats: (name, level) => {
		const bonusStats =
			level === 60
				? data[name].calculatedStatus.lv60SixStarFullyAwakened
				: data[name].calculatedStatus.lv50SixStarFullyAwakened;
		return {
			AttackPercent: bonusStats.bonusMaxAtkPercent,
			DefensePercent: bonusStats.bonusMaxDefPercent,
			HealthPercent: bonusStats.bonusMaxHpPercent,
			Attack: bonusStats.overrideAtk,
			Defense: bonusStats.overrideDef,
			Health: bonusStats.overrideHp,
			Speed: bonusStats.overrideAdditionalSpd,
			CriticalHitChancePercent: bonusStats.overrideAdditionalCr * 100,
			CriticalHitDamagePercent: bonusStats.overrideAdditionalCd * 100,
			EffectivenessPercent: bonusStats.overrideAdditionalEff * 100,
			EffectResistancePercent: bonusStats.overrideAdditionalRes * 100,
		};
	},
};

export default heroes;
