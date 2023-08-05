import React from "react";
import style from "./heroBadge.style";
import hero from "../../json/hero";

interface HeroBadgeProps {
	heroName: string;
}

const HeroBadge = ({ heroName }: HeroBadgeProps) => {
	return (
		<div css={style.heroBadge}>
			<div css={style.image}>
				<img alt={heroName} src={hero.getHeroImage(heroName)} />
			</div>
			<div css={[style.elevatedIcons, style.topSection]}>
				<img alt={heroName} src={hero.getClassImage(heroName)} />
				<img alt={heroName} src={hero.getAttributeImage(heroName)} />
			</div>
			<div css={[style.elevatedIcons, style.bottomSection]}>
				<img alt={heroName} src={hero.getStarImage(heroName)} />
			</div>
		</div>
	);
};

export default HeroBadge;
