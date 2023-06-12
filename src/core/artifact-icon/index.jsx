import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./artifactIcon.style";
import artifacts from "../../json/artifacts";

const ArtifactIcon = ({ artifact }) => {
	return (
		<div css={style.artifact}>
			<img alt="" src={artifacts[artifact.name].assets.image} />
		</div>
	);
};

export default ArtifactIcon;
