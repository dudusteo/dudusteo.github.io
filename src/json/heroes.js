import data from "./cache/herodata.json";

const heroes = {
	data,
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
			CriticalHitChancePercent: bonusStats.overrideAdditionalCr,
			CriticalHitDamagePercent: bonusStats.overrideAdditionalCd,
			EffectivenessPercent: bonusStats.overrideAdditionalEff,
			EffectResistancePercent: bonusStats.overrideAdditionalRes,
		};
	},
};

export default heroes;
