import React from "react";
import style from "./heroBadge.style";
import hero from "../../json/hero";

interface HeroBadgeProps {
	heroName: string;
}

const HeroBadge = ({ heroName }: HeroBadgeProps) => {
	const heroInfo = hero.getHeroInfo(heroName);

	console.log(heroInfo);
	return (
		<div css={style.image}>
			<img alt="" src={hero.getHeroImage(heroName)}></img>
			<div>
				<img src={hero.getClassImage(heroName)} />
				<img src={hero.getAttributeImage(heroName)} />
			</div>
		</div>
	);
};

export default HeroBadge;
