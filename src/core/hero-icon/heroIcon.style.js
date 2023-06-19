import { css } from "@emotion/react/macro";

const style = {
	spine: (theme) => css`
		.spine-player-error {
			display: none !important;
			opacity: 0;
		}
	`,
	image: (theme) => css`
		margin-top: 100px;
		display: flex;
		justify-content: center;
	`,
};

export default style;
