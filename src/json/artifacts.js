import data from "./cache/artifactdata.json";

export const artifactEnhanceOptions = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];

const artifacts = {
	data,
	getBaseStats: (name, level) => {
		const artifact = data[name];
		const baseHealth = artifact.stats.health;
		const baseAttack = artifact.stats.attack;
		const maxHealth = baseHealth * 13;
		const maxAttack = baseAttack * 13;

		const leveledHealth =
			(maxHealth - baseHealth) * (level / 30) + baseHealth;
		const leveledAttack =
			(maxAttack - baseAttack) * (level / 30) + baseAttack;

		return {
			health: leveledHealth,
			attack: leveledAttack,
		};
	},
};

export default artifacts;
