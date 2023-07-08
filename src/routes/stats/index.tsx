import React from "react";
import ArtifactSlot from "../../core/artifact-slot";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	changeHeroName,
	changeArtifact,
} from "../../features/build/build-slice";

const Stats = () => {
	const heroName = useAppSelector((state) => state.build.name);
	const artifact = useAppSelector((state) => state.build.artifact);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div>{heroName}</div>
			<ArtifactSlot
				artifact={artifact}
				setArtifact={(artifact) => {
					dispatch(changeArtifact(artifact));
					return;
				}}
			></ArtifactSlot>
		</div>
	);
};

export default Stats;
