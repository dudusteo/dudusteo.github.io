import { css } from "@emotion/react/macro";

const style = {
	artifact: (rank) => (theme) =>
		css`
			height: 8rem;
		`,
	text: (rank) => (theme) =>
		css`
			color: ${theme.text.gold};
		`,
};

export default style;
