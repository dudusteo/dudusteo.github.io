import ArtifactSlot from "../../core/artifact-slot";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	changeHeroName,
	changeArtifact,
} from "../../features/build/build-slice";
import Autocomplete from "../../core/autocomplete";
import heroes from "../../json/heroes";
import style from "./stats.style";

const Stats = () => {
	const heroName = useAppSelector((state) => state.build.name);
	const artifact = useAppSelector((state) => state.build.artifact);
	const dispatch = useAppDispatch();

	return (
		<div css={style.stats}>
			<div css={style.build}>
				<div className="top-card">
					<Autocomplete
						options={heroes.getHeroOptions()}
						value={heroes
							.getHeroOptions()
							.find((option) => option.label === heroName)}
						onChange={(hero) =>
							dispatch(changeHeroName(hero.label))
						}
					/>
				</div>
				<div className="middle-card">{heroName}</div>

				<div className="bottom-card">
					<ArtifactSlot
						artifact={artifact}
						setArtifact={(artifact) =>
							dispatch(changeArtifact(artifact))
						}
					></ArtifactSlot>
				</div>
			</div>
		</div>
	);
};

export default Stats;
