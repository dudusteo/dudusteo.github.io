import * as Image from "../img";

export const gearRarityOptions = ["Epic", "Heroic", "Rare", "Good", "Normal"];

export const gearLevelOptions = [78, 80, 85, 88, 90];

export const gearEnhanceLevelOptions = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

export const mainStatValues = {
	85: {
		AttackPercent: 12,
		CriticalHitChancePercent: 11,
		CriticalHitDamagePercent: 13,
		DefensePercent: 12,
		EffectivenessPercent: 12,
		EffectResistancePercent: 12,
		HealthPercent: 12,
		Speed: 8,
		Attack: 100,
		Defense: 60,
		Health: 540,
	},
	88: {
		AttackPercent: 13,
		CriticalHitChancePercent: 12,
		CriticalHitDamagePercent: 14,
		DefensePercent: 13,
		EffectivenessPercent: 13,
		EffectResistancePercent: 13,
		HealthPercent: 13,
		Speed: 9,
		Attack: 103,
		Defense: 62,
		Health: 553,
	},
	90: {
		AttackPercent: 13,
		CriticalHitChancePercent: 12,
		CriticalHitDamagePercent: 14,
		DefensePercent: 13,
		EffectivenessPercent: 13,
		EffectResistancePercent: 13,
		HealthPercent: 13,
		Speed: 9,
		Attack: 105,
		Defense: 62,
		Health: 567,
	},
};

export const stats = {
	handleType: (item, newType, originIndex) => {
		var newStats = [item.main, ...item.substats];
		newStats.forEach((object, index) => {
			if (object.type === newType) {
				newStats[index] = { ...newStats[originIndex + 1], value: 0 };
			}
		});
		newStats[originIndex + 1] = {
			...newStats[originIndex + 1],
			type: newType,
			value: 0,
		};

		const newItem = {
			...item,
			main: newStats[0],
			substats: [...newStats.slice(1)],
		};
		newItem.main.value = calculateMainStat(newItem);
		return newItem;
	},
	handleValue: (item, newValue, originIndex) => {
		var newSubs = [...item.substats];
		newSubs[originIndex] = {
			...item.substats[originIndex],
			value: newValue,
		};
		return { ...item, substats: [...newSubs] };
	},
	getImage: (name) => {
		return Image[name];
	},
	options: [
		"AttackPercent",
		"CriticalHitChancePercent",
		"CriticalHitDamagePercent",
		"DefensePercent",
		"EffectivenessPercent",
		"EffectResistancePercent",
		"HealthPercent",
		"Speed",
		"Attack",
		"Defense",
		"Health",
	],
};

export const calculateMainStat = (item) => {
	const { level, enhance } = item;
	const multipliers = [
		1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.3, 3.6, 3.9, 4.25, 5,
	];
	return (
		mainStatValues[level][item.main.type] * multipliers[enhance]
	).toFixed(0);
};

export const returnMissingSubstat = (substats) => {
	var arr = [];
	var res = "";
	substats.forEach((object) => arr.push(object.type));
	stats.options.some((key) => {
		return !arr.includes(key) ? (res = key) : false;
	});
	return res;
};

export const rankInfo = {
	Epic: { rolls: { min: 4, max: 9 } },
	Heroic: { rolls: { min: 3, max: 8 } },
	Rare: { rolls: { min: 2, max: 7 } },
	Good: { rolls: { min: 1, max: 6 } },
	Normal: { rolls: { min: 0, max: 5 } },
};

export const getBaseItem = (level, rank) => {
	const baseItem = {
		level: level,
		rank: rank,
		enhance: 0,
		main: { type: "Attack", value: mainStatValues[85].Attack },
		substats: [],
	};
	for (var i = 0; i < rankInfo[rank].rolls.min; i++) {
		baseItem.substats.push({
			type: returnMissingSubstat([baseItem.main, ...baseItem.substats]),
			value: 0,
		});
	}

	return baseItem;
};
