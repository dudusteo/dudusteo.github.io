import * as React from "react";

import hero from "../../json/hero";
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

			const heroInfo = hero.getHeroInfo(heroName);

			return new SpinePlayer("spine-widget", {
				alpha: true,
				viewport: {
					x: -400,
					y: 0,
					width: 800,
					height: 800,
				},
				showControls: false,
				jsonUrl: `https://www.e7vau.lt/static/game/portrait/${
					heroInfo.code == "c5004" ? "m9194" : heroInfo.code
				}.json`,
				atlasUrl: `https://www.e7vau.lt/static/game/portrait/${
					heroInfo.code == "c5004" ? "m9194" : heroInfo.code
				}.atlas`,
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
					<img alt="" src={hero.getHeroImage(heroName)}></img>
				</div>
			)}
			<div css={style.spine} id="spine-widget"></div>
		</>
	);
});

export default HeroIcon;
