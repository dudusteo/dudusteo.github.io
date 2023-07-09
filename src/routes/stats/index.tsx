import ArtifactSlot from "../../core/artifact-slot";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	changeHeroName,
	changeArtifact,
} from "../../features/build/build-slice";
import Autocomplete from "../../core/autocomplete";
import heroes from "../../json/hero";
import style from "./stats.style";
import ManualStats from "../../core/manual-stats";
import Divider from "../../core/divider";
import hero from "../../json/hero";

const Stats = () => {
	const heroName = useAppSelector((state) => state.build.name);
	const artifact = useAppSelector((state) => state.build.artifact);
	const dispatch = useAppDispatch();

	const heroInfo = heroes.getHeroInfo(heroName);

	console.log(heroInfo);

	return (
		<div css={style.stats}>
			<div css={style.build}>
				<div css={style.topCard}>
					<Autocomplete
						options={heroes.getHeroOptions()}
						value={heroes
							.getHeroOptions()
							.find((option) => option.label === heroName)}
						onChange={(hero) =>
							dispatch(changeHeroName(hero.label))
						}
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
							<img src={hero.getClassImage(heroInfo.role)} />
							<span>{heroInfo.attribute}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
