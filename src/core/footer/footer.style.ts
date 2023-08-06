import { Theme, css } from "@emotion/react";

const style = {
	footer: () => (theme: Theme) =>
		css`
			display: flex;
			flex-direction: column;
			align-items: space-between;
			gap: 1rem;

			padding: 1rem;
			margin-top: 2rem;
			color: ${theme.text.color.white};
			background-color: ${theme.primary};
			border-top: 1px solid ${theme.secondary};
			border-bottom: 1px solid ${theme.secondary};

			a {
				color: ${theme.text.color.yellow};
			}
		`,
	section: () => (theme: Theme) =>
		css`
			display: flex;
			flex-direction: column;
			text-align: center;
		`,
};

export default style;
