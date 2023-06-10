import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./artifactSlot.style";
import ArtifactIcon from "../artifact-icon";

const ArtifactSlot = () => {
	return (
		<div className="artifactSlot" css={style.artifactSlot}>
			<svg css={[style.background]} viewBox="0 0 101 111">
				<path d="M 96 32 L 96 76 A 12 12 90 0 1 88 88 L 54 106 A 12 12 90 0 1 42 106 L 8 88 A 12 12 90 0 1 0 76 L 0 32 A 12 12 90 0 1 8 20 L 42 2 A 12 12 90 0 1 54 2 L 88 20 A 12 12 90 0 1 96 32" />
			</svg>

			<ArtifactIcon />
		</div>
	);
};

export default ArtifactSlot;
