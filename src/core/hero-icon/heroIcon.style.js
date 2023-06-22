import { css } from "@emotion/react/macro";

const style = {
	spine: (theme) => css`
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
