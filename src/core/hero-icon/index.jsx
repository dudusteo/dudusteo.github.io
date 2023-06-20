import * as React from "react";

import heroes from "../../json/heroes";
import { SpinePlayer } from "@esotericsoftware/spine-player";

/** @jsxImportSource @emotion/react */
import style from "./heroIcon.style";

const HeroIcon = React.memo(({ hero }) => {
	const [, setSpineWidget] = React.useState();
	const [isError, setIsError] = React.useState(false);

	React.useEffect(() => {
		setSpineWidget((prevSpineWidget) => {
			if (prevSpineWidget) {
				setIsError(false);
				prevSpineWidget.dispose();
			}

			return new SpinePlayer("spine-widget", {
				alpha: true,
				viewport: {
					x: -400,
					y: -50,
					width: 800,
					height: 800,
				},
				showControls: false,
				jsonUrl: `https://www.e7vau.lt/static/game/portrait/${
					heroes.data[hero.name].code
				}.json`,
				atlasUrl: `https://www.e7vau.lt/static/game/portrait/${
					heroes.data[hero.name].code
				}.atlas`,
				showLoading: false,
				skin: "normal",
				animation: "idle",
				error: (player, msg) => {
					setIsError(true);
				},
			});
		});
	}, [hero]);

	return (
		<>
			{isError && (
				<div css={style.image}>
					<img alt="" src={heroes.data[hero.name].assets.icon}></img>
				</div>
			)}
			<div css={style.spine} id="spine-widget"></div>
		</>
	);
});

export default HeroIcon;

// {spineWidget.error && (
// 	<img alt="" src={heroes.data[hero.name].assets.icon}></img>
// )}
