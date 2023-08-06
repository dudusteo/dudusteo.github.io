import ArtifactSlot from "../artifact-slot";

import style from "./card.style";
import Divider from "../divider";
import hero from "../../json/hero";
import HeroIcon from "../hero-icon";
import Stats from "./stats";
import gear from "../../json/gear";
import Details from "./details";
import EEIcon from "../ee-icon";

interface CardProps {
	heroName: string;
	artifactName: string;
	ee?: number;
	sets: string[];
	stats: FormattedStats;
	details?: Details | null;
}

const Card = ({
	heroName,
	artifactName,
	ee,
	sets,
	stats,
	details = null,
}: CardProps) => {
	return (
		<div css={style.card}>
			<div css={style.heroBackground}>
				<HeroIcon heroName={heroName} />
			</div>
			<div css={style.topCard}>
				<span>{heroName}</span>
			</div>
			<div css={style.middleCard}>
				{details ? (
					<Details details={details} />
				) : (
					<Stats stats={stats} />
				)}
			</div>

			<div css={style.bottomCard}>
				<div className="top-section">
					<ArtifactSlot
						artifact={{ name: artifactName, enhance: 30 }}
					/>
					{ee && (
						<EEIcon eeName={hero.getEEName(heroName)} number={ee} />
					)}
				</div>
				<Divider />
				<div className="bottom-section">
					<div>
						{sets.map((set, index) => (
							<img key={index} src={gear.getSetImage(set)} />
						))}
					</div>
					<div>
						<img src={hero.getClassImage(heroName)} />
						<img src={hero.getAttributeImage(heroName)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
