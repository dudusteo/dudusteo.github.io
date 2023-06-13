import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./heroIcon.style";

import heroes from "../../json/heroes";
import { SpinePlayer } from "@esotericsoftware/spine-player";
const HeroIcon = ({ hero }) => {
	React.useEffect(() => {
		console.log("i fire once");
		new SpinePlayer("spine-widget", {
			alpha: true,
			viewport: {
				debugRender: true,
			},
			showControls: false,
			jsonUrl: `https://www.e7vau.lt/static/game/portrait/${
				heroes.data[hero.name].code
			}.json`,
			atlasUrl: `https://www.e7vau.lt/static/game/portrait/${
				heroes.data[hero.name].code
			}.atlas`,
		});
	}, []);

	return (
		<div css={style.hero}>
			<div id="spine-widget"></div>
		</div>
	);
};

export default HeroIcon;
