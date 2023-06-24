import { css } from "@emotion/react";

const style = {
	spine: (theme) => css`
		canvas {
			position: absolute;
		}
		.spine-player-error {
			display: none !important;
			opacity: 0;
		}
	`,
	image: (theme) => css`
		display: flex;
		justify-content: center;
		img {
			margin: auto;
			height: 200px;
		}
	`,
};

export default style;
