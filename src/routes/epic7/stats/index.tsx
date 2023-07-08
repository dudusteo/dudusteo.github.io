import React from "react";
import ArtifactSlot from "../../../core/artifact-slot";

const Stats = () => {
	return (
		<div>
			<ArtifactSlot
				artifact={null}
				setArtifact={(artifact) => {
					return;
				}}
			></ArtifactSlot>
		</div>
	);
};

export default Stats;
