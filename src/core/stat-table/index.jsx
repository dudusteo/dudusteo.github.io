import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./statTable.style";
import heroes from "../../json/heroes";
import artifacts from "../../json/artifacts";

const toUpperCaseWord = (text) =>
	text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

const toViewFormat = (key, value) => {
	const filter = [
		"critical hit chance",
		"critical hit damage",
		"effectiveness",
		"effect resistance",
		"dual attack chance",
	];
	return filter.find((element) => element === key)
		? (value * 100).toFixed(1) + "%"
		: parseInt(value);
};

const apply = {
	AttackPercent: (heroBaseStats, bonusStatValue) => {
		return ["attack", heroBaseStats.attack * (bonusStatValue * 0.01)];
	},
	DefensePercent: (heroBaseStats, bonusStatValue) => {
		return ["defense", heroBaseStats.defense * (bonusStatValue * 0.01)];
	},
	HealthPercent: (heroBaseStats, bonusStatValue) => {
		return ["health", heroBaseStats.health * (bonusStatValue * 0.01)];
	},
	Attack: (heroBaseStats, bonusStatValue) => {
		return ["attack", bonusStatValue];
	},
	Defense: (heroBaseStats, bonusStatValue) => {
		return ["defense", bonusStatValue];
	},
	Health: (heroBaseStats, bonusStatValue) => {
		return ["health", bonusStatValue];
	},
	Speed: (heroBaseStats, bonusStatValue) => {
		return ["speed", bonusStatValue];
	},
	CriticalHitChancePercent: (heroBaseStats, bonusStatValue) => {
		return ["critical hit chance", bonusStatValue * 0.01];
	},
	CriticalHitDamagePercent: (heroBaseStats, bonusStatValue) => {
		return ["critical hit damage", bonusStatValue * 0.01];
	},
	EffectivenessPercent: (heroBaseStats, bonusStatValue) => {
		return ["effectiveness", bonusStatValue * 0.01];
	},
	EffectResistancePercent: (heroBaseStats, bonusStatValue) => {
		return ["effect resistance", bonusStatValue * 0.01];
	},
};

const calculateBonusStats = (heroBaseStats, bonusStats) => {
	const calculatedStats = {};

	Object.entries(bonusStats).forEach(([key, value]) => {
		if (value) {
			const [statKey, statValue] = apply[key](heroBaseStats, value);

			if (!calculatedStats[statKey]) {
				calculatedStats[statKey] = statValue;
			} else {
				calculatedStats[statKey] += statValue;
			}
		}
	});

	return calculatedStats;
};

// Array of { type, value }
const calculateStatsFromArray = (heroBaseStats, array) => {
	const calculatedStats = {};

	array.forEach((stat) => {
		const [statKey, statValue] = apply[stat.type](
			heroBaseStats,
			stat.value
		);

		if (!calculatedStats[statKey]) {
			calculatedStats[statKey] = statValue;
		} else {
			calculatedStats[statKey] += statValue;
		}
	});

	return calculatedStats;
};

const calculateItemBonusStats = (heroBaseStats, item) => {
	const combinedItemStats = [item.main, ...item.substats];

	return calculateStatsFromArray(heroBaseStats, combinedItemStats);
};

const addToAdditionalStats = (bonusStats, additionalStats) => {
	Object.entries(bonusStats).forEach(([key, value]) =>
		additionalStats[key]
			? (additionalStats[key] += value)
			: (additionalStats[key] = value)
	);
	return additionalStats;
};

const StatTable = React.memo(
	({ heroName, heroGrade, heroEE, artifact, items }) => {
		let newStats = {};

		const heroBaseStats = heroes.getBaseStats(heroName, 60);
		let additionalStats = {};
		Object.entries(heroBaseStats).forEach(
			([key, value]) => (newStats[key] = value)
		);

		const bonusStats = calculateBonusStats(
			heroBaseStats,
			heroes.getBonusStats(heroName, 60)
		);
		additionalStats = addToAdditionalStats(bonusStats, additionalStats);

		if (heroGrade) {
			const imprintStats = calculateStatsFromArray(heroBaseStats, [
				heroes.getImprintStats(heroName, heroGrade),
			]);
			additionalStats = addToAdditionalStats(
				imprintStats,
				additionalStats
			);
		}

		if (heroEE) {
			const exclusiveEquipmentStats = calculateStatsFromArray(
				heroBaseStats,
				[heroes.getExclusiveEquipmentStats(heroName, heroEE)]
			);
			additionalStats = addToAdditionalStats(
				exclusiveEquipmentStats,
				additionalStats
			);
		}

		Object.entries(items).forEach(([key, value]) => {
			if ("rank" in value) {
				const itemBonusStats = calculateItemBonusStats(
					heroBaseStats,
					value
				);
				additionalStats = addToAdditionalStats(
					itemBonusStats,
					additionalStats
				);
			}
		});

		if ("name" in artifact) {
			var artifactStats = artifacts.getBaseStats(
				artifact.name,
				artifact.enhance
			);
			additionalStats = addToAdditionalStats(
				artifactStats,
				additionalStats
			);
		}

		return (
			<div css={style.statTable}>
				{Object.entries(newStats).map(([key, value], index) => (
					<div css={[style.text, style.statRow]} key={index}>
						<span>{toUpperCaseWord(key)}</span>
						<span>
							{toViewFormat(
								key,
								value + (additionalStats[key] || 0)
							)}
						</span>
						{additionalStats[key] ? (
							<div css={style.additionalText}>
								<span>^</span>
								<span>
									{toViewFormat(key, additionalStats[key])}
								</span>
							</div>
						) : (
							<div />
						)}
					</div>
				))}
			</div>
		);
	}
);

export default StatTable;
