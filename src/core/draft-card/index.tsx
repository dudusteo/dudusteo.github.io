import Card from "../card";
import hero from "../../json/hero";

interface DraftCardProps {
	heroName: string;
}

const DraftCard = ({ heroName }: DraftCardProps) => {
	const draftModeHeroInfo = hero.getDraftModeHeroInfo(heroName);

	console.log(draftModeHeroInfo);

	return (
		<Card
			heroName={heroName}
			artifactName={draftModeHeroInfo.artifact}
			sets={draftModeHeroInfo.sets}
			stats={draftModeHeroInfo.stats}
		/>
	);
};

export default DraftCard;
