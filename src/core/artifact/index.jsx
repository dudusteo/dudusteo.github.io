import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./artifact.style";
import align from "../../styles/align.style";
import Dropdown from "../dropdown";
import artifacts from "../../json/artifacts";

const Artifact = ({ artifact, setArtifact }) => {
	const setName = (newName) => {
		setArtifact((prevArtifact) => ({
			...prevArtifact,
			name: newName,
		}));
	};

	const setEnhance = (newEnhance) => {
		setArtifact((prevArtifact) => ({
			...prevArtifact,
			enhance: newEnhance,
		}));
	};

	return (
		<div css={[style.background]}>
			<div css={style.artifact}>
				<div css={[align.twoHorizontal, align.lastRight]}>
					<div>
						<div
							css={[
								align.twoHorizontal,
								style.text("title", "small"),
							]}
						>
							<Dropdown
								options={Object.keys(artifacts)}
								value={artifact.name}
								setValue={(x) => setName(x)}
							/>
							<span>&nbsp;{"+"}</span>
							<Dropdown
								options={[0, 1]}
								value={artifact.enhance}
								setValue={(x) => setEnhance(parseInt(x))}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Artifact;
