import { css } from "@emotion/react";

const size = 9;

const style = {
	artifactBadge: () => () =>
		css`
			cursor: pointer;
			display: flex;
			position: relative;
			justify-content: center;

			height: 100%;

			svg {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;

				path {
					stroke: #777;
					stroke-width: 2px;
					fill: #30303030;
				}
			}
		`,
	artifactOverlay: () => () =>
		css`
			display: flex;
			justify-content: center;
			position: relative;
			height: 100%;
			width: 100%;
			img:last-of-type {
				margin-bottom: ${(size / 12) * 0.5}rem;
				position: absolute;
				align-self: end;
				height: ${(size / 12) * 2}rem;
			}
		`,
};

export default style;
