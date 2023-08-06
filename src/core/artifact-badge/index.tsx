import React from "react";
import style from "./artifactBadge.style";
import artifact from "../../json/artifact";

interface ArtifactBadgeProps {
	artifactName: string;
	id?: string;
	handleClick?: React.MouseEventHandler<SVGSVGElement>;
}

const ArtifactBadge = ({
	artifactName,
	id,
	handleClick,
}: ArtifactBadgeProps) => {
	return (
		<div css={style.artifactBadge}>
			{!artifactName && (
				<svg
					aria-describedby={id}
					type="button"
					onClick={handleClick}
					viewBox="-1 -1 98 110"
				>
					<path d="M 96 32 L 96 76 A 12 12 90 0 1 88 88 L 54 106 A 12 12 90 0 1 42 106 L 8 88 A 12 12 90 0 1 0 76 L 0 32 A 12 12 90 0 1 8 20 L 42 2 A 12 12 90 0 1 54 2 L 88 20 A 12 12 90 0 1 96 32" />
				</svg>
			)}

			{artifactName && (
				<div css={style.artifactOverlay}>
					<img alt="" src={artifact.getImage(artifactName)} />
					<img alt="" src={artifact.getStarImage(artifactName)} />
				</div>
			)}
		</div>
	);
};

export default ArtifactBadge;
