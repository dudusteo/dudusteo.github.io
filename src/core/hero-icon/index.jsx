import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./heroIcon.style";

import heroes from "../../json/heroes";

const HeroIcon = ({ hero }) => {
	return (
		<div css={style.hero}>
			<img
				alt=""
				src={
					"https://static.smilegatemegaport.com/event/live/epic7/guide/images/hero/" +
					heroes[hero.name].code +
					"_s.png"
				}
			/>
		</div>
	);
};

export default HeroIcon;
