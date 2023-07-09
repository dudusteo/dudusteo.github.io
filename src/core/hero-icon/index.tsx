import * as React from "react";

import heroes from "../../json/hero";
import { SpinePlayer, SpinePlayerConfig } from "@esotericsoftware/spine-player";

import style from "./heroIcon.style";

interface HeroIconProps {
	heroName: any;
}

const HeroIcon = React.memo(({ heroName }: HeroIconProps) => {
	const [, setSpineWidget] = React.useState<SpinePlayer>();
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
					y: 0,
					width: 800,
					height: 800,
				},
				showControls: false,
				jsonUrl: `https://www.e7vau.lt/static/game/portrait/${heroes.data[heroName].code}.json`,
				atlasUrl: `https://www.e7vau.lt/static/game/portrait/${heroes.data[heroName].code}.atlas`,
				showLoading: false,
				skin: "normal",
				animation: "idle",
				error: (player: SpinePlayer, msg: string) => {
					setIsError(true);
				},
			} as SpinePlayerConfig);
		});
	}, [heroName]);

	return (
		<>
			{isError && (
				<div css={style.image}>
					<img alt="" src={heroes.data[heroName].assets.icon}></img>
				</div>
			)}
			<div css={style.spine} id="spine-widget"></div>
		</>
	);
});

export default HeroIcon;
