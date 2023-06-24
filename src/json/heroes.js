import data from "./cache/herodata.json";

const createUniversalNotation = {
	att_rate: (statValue) => ["AttackPercent", (statValue * 100).toFixed(1)],
	def_rate: (statValue) => ["DefensePercent", (statValue * 100).toFixed(1)],
	max_hp_rate: (statValue) => ["HealthPercent", (statValue * 100).toFixed(1)],
	att: (statValue) => ["Attack", parseInt(statValue)],
	def: (statValue) => ["Defense", parseInt(statValue)],
	max_hp: (statValue) => ["Health", parseInt(statValue)],
	speed: (statValue) => ["Speed", parseInt(statValue)],
	cri: (statValue) => [
		"CriticalHitChancePercent",
		(statValue * 100).toFixed(1),
	],
	acc: (statValue) => ["EffectivenessPercent", (statValue * 100).toFixed(1)],
	res: (statValue) => [
		"EffectResistancePercent",
		(statValue * 100).toFixed(1),
	],
};

const heroes = {
	data,
	getHeroOptions: () => {
		const heroOptions = [];
		Object.entries(data).forEach(([key, value]) => {
			heroOptions.push({ label: key, value: value.code });
		});
		return heroOptions;
	},
	getExclusiveEquipmentStats: (heroName, heroEEValue) => {
		const exclusiveEquipments = data[heroName].ex_equip;

		const [type, value] =
			createUniversalNotation[exclusiveEquipments[0].stat.type](
				heroEEValue
			);

		return {
			type: type,
			value: value,
		};
	},
	getExclusiveEquipmentOptions: (heroName) => {
		const exclusiveEquipments = data[heroName].ex_equip;
		if (exclusiveEquipments.length === 0) return [];

		const minValue = createUniversalNotation[
			exclusiveEquipments[0].stat.type
		](exclusiveEquipments[0].stat.value)[1];
		const maxValue = minValue * 2;

		const exclusiveEqupimentOptions = [];

		for (let stepValue = minValue; stepValue <= maxValue; stepValue++) {
			const [type, value] =
				createUniversalNotation[exclusiveEquipments[0].stat.type](
					stepValue
				);

			exclusiveEqupimentOptions.push({
				label: type + " " + value,
				type: type,
				value: value,
			});
		}

		return exclusiveEqupimentOptions;
	},
	getImprintStats: (heroName, heroGrade) => {
		const imprintType = data[heroName].self_devotion.type;
		const imprintValue = data[heroName].self_devotion.grades[heroGrade];

		const [type, value] =
			createUniversalNotation[imprintType](imprintValue);

		return {
			type: type,
			value: value,
		};
	},
	getImprintOptions: (heroName) => {
		const imprintOptions = [];
		Object.entries(data[heroName].self_devotion.grades).forEach(
			([key, value]) => {
				const imprintType = data[heroName].self_devotion.type;

				const [imprintName, imprintValue] =
					createUniversalNotation[imprintType](value);

				imprintOptions.push({
					label: key + " " + imprintName + " " + imprintValue,
					value: imprintValue,
					type: imprintName,
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
