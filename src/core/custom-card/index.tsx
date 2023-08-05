import ArtifactSlot from "../artifact-slot";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	changeHeroName,
	changeArtifact,
} from "../../features/build/build-slice";
import Autocomplete from "../autocomplete";
import heroes from "../../json/hero";
import style from "./card.style";
import ManualStats from "../manual-stats";
import Divider from "../divider";
import hero from "../../json/hero";
import HeroIcon from "../hero-icon";

interface CardProps {
	heroName: string;
}

const Card = ({ heroName }: CardProps) => {
	const artifact = useAppSelector((state) => state.build.artifact);
	const dispatch = useAppDispatch();

	return (
		<div css={style.card}>
			<div css={style.heroBackground}>
				<HeroIcon heroName={heroName} />
			</div>
			<div css={style.topCard}>
				<Autocomplete
					options={heroes.getHeroOptions()}
					value={heroes
						.getHeroOptions()
						.find((option) => option.label === heroName)}
					onChange={(hero) => dispatch(changeHeroName(hero.label))}
					listboxCss={style.autocompleteListbox}
				/>
			</div>
			<div css={style.middleCard}>
				<ManualStats heroName={heroName} />
			</div>

			<div css={style.bottomCard}>
				<div className="top-section">
					<ArtifactSlot
						artifact={artifact}
						setArtifact={(artifact) =>
							dispatch(changeArtifact(artifact))
						}
					/>
				</div>
				<Divider />
				<div className="bottom-section">
					<div>left</div>
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
