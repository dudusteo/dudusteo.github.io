import { css } from "@emotion/react";

const style = {
	dropdown: (input) => (theme) =>
		css`
			&:hover {
				opacity: 0.5;
				cursor: pointer;
			}
		`,
	color: (activeColor) => (theme) =>
		css`
			color: ${theme.rank[activeColor]};
		`,
};

export default style;
