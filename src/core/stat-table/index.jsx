import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./statTable.style";
import align from "../../styles/align.style";
import heroes from "../../json/heroes";
import artifacts from "../../json/artifacts";

// 				"cp": 14466,
// 				"atk": 984,
// 				"hp": 6266,
// 				"spd": 117,
// 				"def": 637,
// 				"chc": 0.15,
// 				"chd": 1.5,
// 				"dac": 0.03,
// 				"eff": 0,
// 				"efr": 0

const buildOptions = {
	attack: 0,
	defense: 0,
	health: 0,
	speed: 0,
	"critical hit chance": 0,
	"critical hit damage": 0,
	effectiveness: 0,
	"effect resistance": 0,
	"dual attack chance": 0,
};

const StatTable = ({ hero, artifact }) => {
	const [stats, setStats] = React.useState(buildOptions);

	React.useEffect(() => {
		let newStats = buildOptions;

		if ("name" in hero) {
			var heroStats = heroes.getStats(hero.name, 60);
			Object.entries(heroStats).forEach(
				([key, value]) => (newStats[key] = heroStats[key])
			);
		}
		if ("name" in artifact) {
			var artifactStats = artifacts.getStats(
				artifact.name,
				artifact.enhance
			);
			Object.entries(artifactStats).forEach(
				([key, value]) => (newStats[key] += artifactStats[key])
			);
		}
		setStats(newStats);
	}, [hero, artifact]);

	return (
		<div css={style.base}>
			{Object.entries(stats).map(([key, value], index) => (
				<div
					key={index}
					css={[
						align.twoHorizontal,
						align.lastRight,
						style.text("else", "small"),
					]}
				>
					<span>{key}</span>
					<span>{value}</span>
				</div>
			))}
		</div>
	);
};

export default StatTable;
