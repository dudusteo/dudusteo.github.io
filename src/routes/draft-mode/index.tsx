import React from "react";
import style from "./draftMode.style";
import hero from "../../json/hero";
import HeroBadge from "../../core/hero-badge";
import DraftCard from "../../core/draft-card";

const DraftMode = () => {
	const heroOptions = hero.getDraftModeHeroOptions();
	const [heroName, setHeroName] = React.useState("Vildred");

	return (
		<div css={style.draftMode}>
			<DraftCard heroName={heroName} />
			<div css={style.draftModeList}>
				{heroOptions.map((heroOption, index) => (
					<button
						key={index}
						onClick={() => setHeroName(heroOption.label)}
					>
						<HeroBadge heroName={heroOption.label} />
					</button>
				))}
			</div>
		</div>
	);
};

export default DraftMode;
