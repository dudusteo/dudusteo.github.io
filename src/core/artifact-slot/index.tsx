import * as React from "react";

import Artifact from "../artifact";
import { ClickAwayListener, Popper } from "@mui/base";
import ArtifactBadge from "../artifact-badge";

interface ArtifactSlotProps {
	artifact: Artifact | null;
	setArtifact?: (newArtifact: Artifact) => void;
}

const ArtifactSlot = ({
	artifact,
	setArtifact = () => {
		return;
	},
}: ArtifactSlotProps) => {
	const [anchorEl, setAnchorEl] = React.useState<
		(EventTarget & SVGSVGElement) | null
	>(null);

	// const handleClick = (
	// 	event: React.MouseEvent<SVGSVGElement, MouseEvent>
	// ) => {
	// 	setAnchorEl(anchorEl ? null : event.currentTarget);
	// };

	const removeArtifact = () => {
		setAnchorEl(null);
		setArtifact(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
			<div className="artifact-slot">
				<ArtifactBadge artifactName={artifact.name} />
				{open ? (
					<Popper
						id={id}
						open={open}
						anchorEl={anchorEl}
						placement="left-start"
						style={{ zIndex: 10 }}
					>
						<Artifact
							artifact={artifact}
							setArtifact={setArtifact}
							removeArtifact={removeArtifact}
						/>
					</Popper>
				) : null}
			</div>
		</ClickAwayListener>
	);
};

export default ArtifactSlot;
