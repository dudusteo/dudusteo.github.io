import ArtifactSlot from "../artifact-slot";

import style from "./card.style";
import Divider from "../divider";
import hero from "../../json/hero";
import HeroIcon from "../hero-icon";
import Stats from "../stats";
import gear from "../../json/gear";

interface CardProps {
	heroName: string;
	artifactName: string;
	sets: string[];
	stats: Stats;
}

const Card = ({ heroName, artifactName, sets, stats }: CardProps) => {
	return (
		<div css={style.card}>
			<div css={style.heroBackground}>
				<HeroIcon heroName={heroName} />
			</div>
			<div css={style.topCard}>
				<span>{heroName}</span>
			</div>
			<div css={style.middleCard}>
				<Stats stats={stats} />
			</div>

			<div css={style.bottomCard}>
				<div className="top-section">
					<ArtifactSlot
						artifact={{ name: artifactName, enhance: 30 }}
					/>
				</div>
				<Divider />
				<div className="bottom-section">
					<div>
						{sets.map((set) => (
							<img src={gear.getSetImage(set)} />
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
