import { css } from "@emotion/react/macro";

const style = {
	artifactSlot: (input) => (theme) =>
		css`
			width: 8em;
			align-items: center;

			svg {
				width: 8em;
				position: absolute;
			}
		`,
	background: (input) => (theme) =>
		css`
			height: 8em;

			path {
				stroke: #777;
				stroke-width: 2px;
				fill: #30303030;
			}
		`,
};

export default style;
