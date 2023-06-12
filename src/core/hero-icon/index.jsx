import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./heroIcon.style";

import heroes from "../../json/heroes";
import { SpinePlayer } from "@esotericsoftware/spine-player";
const HeroIcon = ({ hero }) => {
	React.useEffect(() => {
		const config = {
			premultipliedAlpha: true,
			backgroundColor: "#cccccc",
			viewport: {
				debugRender: true,
			},
			showControls: true,
			jsonUrl: `https://www.e7vau.lt/static/game/portrait/${
				heroes[hero.name].code
			}.json`,
			atlasUrl: `https://www.e7vau.lt/static/game/portrait/${
				heroes[hero.name].code
			}.atlas`,
		};

		//new SpinePlayer("player-container", config);
	}, [hero]);

	return (
		<div css={style.hero}>
			{/* <div id="player-container"></div>; */}
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
