import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./artifact.style";
import align from "../../styles/align.style";
import Dropdown from "../dropdown";
import artifacts, { artifactEnhanceOptions } from "../../json/artifacts";
import Button from "../button";

const getBaseArtifact = () => {
	return { name: Object.keys(artifacts.data)[0], enhance: 0 };
};

const Artifact = ({ artifact, setArtifact, removeArtifact }) => {
	React.useEffect(() => {
		if (Object.keys(artifact).length === 0) {
			setArtifact((prevArtifact) => getBaseArtifact());
		}
	}, [artifact, setArtifact]);

	if (Object.keys(artifact).length === 0) {
		return <div>loading ...</div>;
	}

	const setName = (newName) => {
		setArtifact((prevArtifact) => ({
			...prevArtifact,
			name: newName,
			enhance: prevArtifact?.enhance ? prevArtifact.enhance : 0,
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
								options={Object.keys(artifacts.data)}
								value={artifact.name}
								setValue={(x) => setName(x)}
							/>
							<span>&nbsp;{"+"}</span>
							<Dropdown
								options={artifactEnhanceOptions}
								value={artifact.enhance}
								setValue={(x) => setEnhance(parseInt(x))}
							/>
						</div>
						<Button
							size="tiny"
							color="blue"
							onClick={() => removeArtifact()}
						>
							{"Remove"}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Artifact;
