import data from "./cache/herodata.json";
import draftData from "./cache/draftmode.json";
import * as Image from "../img";

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

interface HeroController {
	data: any;
	getDraftModeHeroInfo: (heroName: string) => any;
	getDraftModeHeroOptions: () => any;
	getHeroInfo: (heroName: string) => any;
	getHeroOptions: () => any;
	getExclusiveEquipmentStats: (
		heroName: string,
		heroEEValue: number
	) => {
		type: string;
		value: number;
	};
	getExclusiveEquipmentOptions: (heroName: string) => any;
	getImprintStats: (heroName: string, heroGrade: string) => any;
	getImprintOptions: (heroName: string) => any;
	getBaseStats: (heroName: string, heroLevel: number) => any;
	getBonusStats: (heroName: string, heroLevel: number) => any;
	getHeroImage: (heroName: string) => string;
	getClassImage: (heroName: string) => string;
	getAttributeImage: (heroName: string) => string;
}

const hero = {
	data,
	getDraftModeHeroInfo: () => {
		return draftData;
	},
	getDraftModeHeroOptions: () => {
		const draftModeHeroOptions = [];
		Object.entries(draftData).forEach(([key, value]) => {
			draftModeHeroOptions.push({ label: key });
		});
		return draftModeHeroOptions;
	},
	getHeroInfo: (heroName: string) => {
		const hero = data[heroName];
		return hero;
	},
	getHeroOptions: () => {
		const heroOptions = [];
		Object.entries(data).forEach(([key, value]) => {
			heroOptions.push({ label: key, value: value.code });
		});
		return heroOptions;
	},
	getExclusiveEquipmentStats: (heroName: string, heroEEValue: number) => {
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
	getExclusiveEquipmentOptions: (heroName: string) => {
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
	getImprintStats: (heroName: string, heroGrade: string) => {
		const imprintType = data[heroName].self_devotion.type;
		const imprintValue = data[heroName].self_devotion.grades[heroGrade];

		const [type, value] =
			createUniversalNotation[imprintType](imprintValue);

		return {
			type: type,
			value: value,
		};
	},
	getImprintOptions: (heroName: string) => {
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
	getBaseStats: (heroName: string, heroLevel: number) => {
		const baseStats =
			heroLevel === 60
				? data[heroName].calculatedStatus.lv60SixStarFullyAwakened
				: data[heroName].calculatedStatus.lv50SixStarFullyAwakened;

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

	getBonusStats: (heroName: string, heroLevel: number) => {
		const bonusStats =
			heroLevel === 60
				? data[heroName].calculatedStatus.lv60SixStarFullyAwakened
				: data[heroName].calculatedStatus.lv50SixStarFullyAwakened;
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
	getHeroImage: (heroName: string) => {
		return data[heroName].assets.icon;
	},
	getClassImage: (heroName: string) => {
		const hero = data[heroName];
		return Image.heroClass[hero.role];
	},
	getAttributeImage: (heroName: string) => {
		const hero = data[heroName];
		return Image.attribute[hero.attribute];
	},
};

export default hero as HeroController;
