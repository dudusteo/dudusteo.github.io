import * as React from "react";

import style from "./artifactIcon.style";
import artifacts from "../../json/artifacts";

const ArtifactIcon = ({ artifact }) => {
	return (
		<div css={style.artifact}>
			<img
				alt=""
				src={
					"https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/artifact/" +
					artifacts.data[artifact.name].code +
					"_ico.png"
				}
			/>
		</div>
	);
};

export default ArtifactIcon;
