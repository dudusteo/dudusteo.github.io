import stat from "../../../json/stat";

interface ManualStatsProps {
	stats: FormattedStats;
}

const Stats = ({ stats }: ManualStatsProps) => {
	return (
		<div className="manual-stats">
			{Object.entries(stats).map(([key, value]) => (
				<div key={key}>
					<img src={stat.getImage(key)} />
					<span>{value}</span>
				</div>
			))}
		</div>
	);
};

export default Stats;
