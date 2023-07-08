import { css } from "@emotion/react";

const style = {
	artifact: (rank) => (theme) =>
		css`
			img {
				height: 8em;
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		`,
	text: (rank) => (theme) =>
		css`
			color: ${theme.text.color.gold};
		`,
};

export default style;
