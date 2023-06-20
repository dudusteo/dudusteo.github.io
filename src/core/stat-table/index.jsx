import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./statTable.style";
import align from "../../styles/align.style";
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

const calculateItemBonusStats = (heroBaseStats, item) => {
	const combinedItemStats = [item.main, ...item.substats];
	const calculatedStats = {};

	combinedItemStats.forEach((stat) => {
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

const StatTable = React.memo(({ hero, artifact, items }) => {
	let newStats = {};

	const heroBaseStats = heroes.getBaseStats(hero.name, 60);
	let additionalStats = {};
	Object.entries(heroBaseStats).forEach(
		([key, value]) => (newStats[key] = value)
	);

	const heroBonusStats = heroes.getBonusStats(hero.name, 60);
	const bonusStats = calculateBonusStats(heroBaseStats, heroBonusStats);
	Object.entries(bonusStats).forEach(([key, value]) => {
		additionalStats[key]
			? (additionalStats[key] += value)
			: (additionalStats[key] = value);
	});

	Object.entries(items).forEach(([key, value]) => {
		if ("rank" in value) {
			const itemBonusStats = calculateItemBonusStats(
				heroBaseStats,
				value
			);
			Object.entries(itemBonusStats).forEach(([key, value]) =>
				additionalStats[key]
					? (additionalStats[key] += value)
					: (additionalStats[key] = value)
			);
		}
	});

	if ("name" in artifact) {
		var artifactStats = artifacts.getBaseStats(
			artifact.name,
			artifact.enhance
		);
		Object.entries(artifactStats).forEach(([key, value]) =>
			additionalStats[key]
				? (additionalStats[key] += value)
				: (additionalStats[key] = value)
		);
	}

	return (
		<div css={style.statTable}>
			{Object.entries(newStats).map(([key, value], index) => (
				<div
					css={[style.text("else", "small"), style.statRow]}
					key={index}
				>
					<span>{toUpperCaseWord(key)}</span>
					<span>
						{toViewFormat(key, value + (additionalStats[key] || 0))}
					</span>
					{additionalStats[key] && (
						<>
							<span>^</span>
							<span>
								{toViewFormat(key, additionalStats[key])}
							</span>
						</>
					)}
				</div>
			))}
		</div>
	);
});

export default StatTable;
