import Card from "../card";
import hero from "../../json/hero";
import stat from "../../json/stat";

interface DraftCardProps {
	heroName: string;
	details?: boolean;
}

const DraftCard = ({ heroName, details = false }: DraftCardProps) => {
	const draftModeHeroInfo = hero.getDraftModeHeroInfo(heroName);

	return (
		<Card
			heroName={heroName}
			artifactName={draftModeHeroInfo.artifact}
			ee={draftModeHeroInfo.ee}
			sets={draftModeHeroInfo.sets}
			stats={stat.getFormattedStats(draftModeHeroInfo.stats)}
			details={details ? draftModeHeroInfo.details : null}
		/>
	);
};

export default DraftCard;
