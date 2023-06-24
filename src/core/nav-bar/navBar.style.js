import { css } from "@emotion/react/macro";

const style = {
	navBar: (input) => (theme) =>
		css`
			height: 50px;
			background-color: ${theme.primary};
			display: flex;
			border-bottom: 1px solid ${theme.secondary};
		`,
	button: (input) => (theme) =>
		css`
			cursor: pointer;
			color: ${theme.text.white};
			padding: 1em;
			position: relative;
			&::before {
				background: linear-gradient(
					to right,
					transparent,
					${theme.secondary}
				);
				opacity: 0.5;
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 0%;
				height: 100%;
			}
			&:hover::before {
				transition: width 400ms ease;
				width: 100%;
			}
		`,
};

export default style;
