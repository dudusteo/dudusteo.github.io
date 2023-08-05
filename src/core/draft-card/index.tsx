import Card from "../card";
import hero from "../../json/hero";
import stat from "../../json/stat";

interface DraftCardProps {
	heroName: string;
}

const DraftCard = ({ heroName }: DraftCardProps) => {
	const draftModeHeroInfo = hero.getDraftModeHeroInfo(heroName);

	return (
		<Card
			heroName={heroName}
			artifactName={draftModeHeroInfo.artifact}
			sets={draftModeHeroInfo.sets}
			stats={stat.getFormattedStats(draftModeHeroInfo.stats)}
		/>
	);
};

export default DraftCard;
