import * as React from "react";

import heroes from "../../json/heroes";
import { SpinePlayer } from "@esotericsoftware/spine-player";
const HeroIcon = React.memo(({ hero }) => {
	const [, setSpineWidget] = React.useState();

	React.useEffect(() => {
		setSpineWidget((prevSpineWidget) => {
			if (prevSpineWidget) {
				prevSpineWidget.dispose();
			}

			return new SpinePlayer("spine-widget", {
				alpha: true,
				viewport: {
					x: -600,
					y: -400,
					width: 1200,
					height: 1200,
				},
				showControls: false,
				jsonUrl: `https://www.e7vau.lt/static/game/portrait/${
					heroes.data[hero.name].code
				}.json`,
				atlasUrl: `https://www.e7vau.lt/static/game/portrait/${
					heroes.data[hero.name].code
				}.atlas`,
				skin: "normal",
				animation: "idle",
			});
		});
	}, [hero]);

	return <div id="spine-widget"></div>;
});

export default HeroIcon;
