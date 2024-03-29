import * as React from "react";

import style from "./artifact.style";
import Dropdown from "../dropdown";
import artifacts, { artifactEnhanceOptions } from "../../json/artifact";
import Button from "../button";

const getBaseArtifact = () => {
	return { name: Object.keys(artifacts.data)[0], enhance: 0 };
};

interface ArtifactProps {
	artifact: Artifact | null;
	setArtifact: (newArtifact: Artifact) => void;
	removeArtifact: () => void;
}

const Artifact = React.memo(
	({ artifact, setArtifact, removeArtifact }: ArtifactProps) => {
		React.useEffect(() => {
			if (!artifact) {
				setArtifact(getBaseArtifact());
			}
		}, []);

		if (!artifact) {
			return <div>loading ...</div>;
		}

		const setName = (newName) => {
			setArtifact({
				name: newName,
				enhance: artifact.enhance,
			});
		};

		const setEnhance = (newEnhance) => {
			setArtifact({
				name: artifact.name,
				enhance: newEnhance,
			});
		};

		return (
			<div css={[style.background]}>
				<div css={style.artifact}>
					<div>
						<div>
							<div css={[style.text("title", "small")]}>
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
	}
);

export default Artifact;
