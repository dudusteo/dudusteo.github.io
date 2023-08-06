import { Theme, css } from "@emotion/react";

const style = {
	footer: () => (theme: Theme) =>
		css`
			display: flex;
			flex-direction: column;
			text-align: center;
			margin-top: 2rem;
			padding: 1rem;
			color: ${theme.text.color.white};
			background-color: ${theme.primary};
			display: flex;
			border-top: 1px solid ${theme.secondary};
			border-bottom: 1px solid ${theme.secondary};
		`,
};

export default style;
