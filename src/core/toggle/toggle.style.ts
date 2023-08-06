import { Theme, css } from "@emotion/react";

const size = 10;

const style = {
	toggle: () => (theme: Theme) =>
		css`
			display: inline-block;
			position: relative;
			width: ${size}rem;
			height: 2rem;
			padding: 8px;
		`,

	input: () => (theme: Theme) =>
		css`
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			opacity: 0;
			z-index: 1;
			margin: 0;
			cursor: pointer;
		`,
	track: () => (theme: Theme) =>
		css`
			background-color: ${theme.primary};
			border-radius: 0.5rem;
			width: 100%;
			height: 100%;
			display: block;
		`,
	thumb: () => (theme: Theme) =>
		css`
			position: absolute;
			display: block;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			top: 0px;
			left: 0px;
			transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

			&::before {
				display: block;
				content: "";
				width: 100%;
				height: 100%;

				border-radius: 15px;
				background: ${theme.text.color.yellow};
			}

			&.focusVisible {
				background-color: #79b;
			}
		`,
	checked: () => (theme: Theme) =>
		css`
			transform: translateX(${size - 2}rem);

			&::before {
				background-image: black;
			}
		`,
};

export default style;
