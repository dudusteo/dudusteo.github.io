import React from "react";
import Card from "../card";
import style from "./draftMode.style";
import hero from "../../json/hero";
import HeroBadge from "../../core/hero-badge";

const DraftMode = () => {
	const heroOptions = hero.getDraftModeHeroOptions();

	return (
		<div css={style.draftMode}>
			<div css={style.draftModeList}>
				{heroOptions.map((heroOption, index) => (
					<HeroBadge key={index} heroName={heroOption.label} />
				))}
			</div>
			<Card></Card>
		</div>
	);
};

export default DraftMode;
