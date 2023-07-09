import artifacts from "../../json/artifact";
import style from "./artifactIcon.style";

interface ArtifaceIconProps {
	artifact: Artifact;
}

const ArtifactIcon = ({ artifact }: ArtifaceIconProps) => {
	return (
		<div css={style.artifact}>
			<img alt="" src={artifacts.getImage(artifact.name)} />
		</div>
	);
};

export default ArtifactIcon;
