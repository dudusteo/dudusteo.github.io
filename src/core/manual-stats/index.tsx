import stat from "../../json/stat";
import hero from "../../json/hero";

interface ManualStatsProps {
	heroName: string;
}

const ManualStats = ({ heroName }: ManualStatsProps) => {
	const baseStats = hero.getBaseStats(heroName, 60);

	return (
		<div className="manual-stats">
			{Object.entries(baseStats).map(([key, value]) => (
				<div key={key}>
					<img src={stat.getImage(key)} />
					<input placeholder={value as string} />
				</div>
			))}
		</div>
	);
};

export default ManualStats;
