import React from "react";
import Card from "../card";
import style from "./draftMode.style";
import hero from "../../json/hero";
import HeroBadge from "../../core/hero-badge";

const DraftMode = () => {
	const heroOptions = hero.getDraftModeHeroOptions();
	const [heroName, setHeroName] = React.useState("Abigail");

	return (
		<div css={style.draftMode}>
			<Card heroName={heroName}></Card>
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
