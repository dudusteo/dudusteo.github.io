import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./artifactIcon.style";
import artifacts from "../../img/artifacts";

const ArtifactIcon = ({ artifact }) => {
	return (
		<div css={style.artifact}>
			<img alt="" src={artifacts.art0181} />
		</div>
	);
};

export default ArtifactIcon;
