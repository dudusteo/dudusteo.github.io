import { css } from "@emotion/react";

const style = {
	artifactSlot: () => () =>
		css`
			cursor: pointer;
			position: relative;
			height: 100%;

			svg {
				margin: -1px 0;
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

			img {
				margin: 0% 5%;
				height: 100%;
			}
		`,
};

export default style;
