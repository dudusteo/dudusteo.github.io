import { css } from "@emotion/react/macro";

const style = {
	hero: (rank) => (theme) =>
		css`
			width: fit-content;
			height: fit-content;
			div {
				width: 60em;
			}
		`,
	text: (rank) => (theme) =>
		css`
			color: ${theme.text.gold};
		`,
};

export default style;
