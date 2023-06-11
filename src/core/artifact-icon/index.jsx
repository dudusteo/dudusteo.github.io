import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./artifactIcon.style";
import artifacts from "../../img/artifacts";

const ArtifactIcon = ({ artifactName }) => {
	return (
		<div css={style.artifact}>
			<img alt="" src={artifacts[artifactName]} />
		</div>
	);
};

export default ArtifactIcon;
