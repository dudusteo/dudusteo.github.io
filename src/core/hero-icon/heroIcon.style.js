import { css } from "@emotion/react/macro";

const style = {
	hero: (rank) => (theme) =>
		css`
			img {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		`,
	text: (rank) => (theme) =>
		css`
			color: ${theme.text.gold};
		`,
};

export default style;
