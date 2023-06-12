import { css } from "@emotion/react/macro";

const style = {
	artifact: (rank) => (theme) =>
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
