import { css } from "@emotion/react/macro";

const style = {
	artifactSlot: (input) => (theme) =>
		css`
			svg {
				position: absolute;
			}
			img {
				margin: 1px 0px;
			}
		`,
	background: (input) => (theme) =>
		css`
			height: 8em;
			margin: 2px;
			path {
				stroke: #777;
				stroke-width: 2px;
				fill: #30303030;
			}
		`,
};

export default style;
