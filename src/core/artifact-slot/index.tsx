import * as React from "react";

import style from "./artifactSlot.style";
import Artifact from "../artifact";
import ArtifactIcon from "../artifact-icon";
import { ClickAwayListener, Popper } from "@mui/base";

interface ArtifactSlotProps {
	artifact: Artifact | null;
	setArtifact: (newArtifact: Artifact) => void;
}

const ArtifactSlot = ({ artifact, setArtifact }: ArtifactSlotProps) => {
	const [anchorEl, setAnchorEl] = React.useState<
		(EventTarget & SVGSVGElement) | null
	>(null);

	const handleClick = (
		event: React.MouseEvent<SVGSVGElement, MouseEvent>
	) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const removeArtifact = () => {
		setAnchorEl(null);
		setArtifact(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
			<div className="artifactSlot">
				<div css={style.artifactSlot}>
					<svg
						aria-describedby={id}
						type="button"
						onClick={handleClick}
						css={[style.background]}
						viewBox="-1 -1 98 110"
					>
						<path d="M 96 32 L 96 76 A 12 12 90 0 1 88 88 L 54 106 A 12 12 90 0 1 42 106 L 8 88 A 12 12 90 0 1 0 76 L 0 32 A 12 12 90 0 1 8 20 L 42 2 A 12 12 90 0 1 54 2 L 88 20 A 12 12 90 0 1 96 32" />
					</svg>

					{artifact && <ArtifactIcon artifact={artifact} />}
				</div>
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