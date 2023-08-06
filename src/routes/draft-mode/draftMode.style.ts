import { Theme, css } from "@emotion/react";

const style = {
	draftMode: () => (theme: Theme) =>
		css`
			display: flex;
			padding: auto auto;
		`,

	card: () => (theme: Theme) =>
		css`
			height: clamp(15rem, 0rem + 200vw, 60rem);
		`,

	switch: () => (theme: Theme) =>
		css`
			display: flex;
			flex-direction: column;
			height: clamp(2rem, 0rem + 26.6666vw, 8rem);
			.switch {
				display: flex;
				justify-content: space-between;
				background-color: ${theme.border.secondary};
				border-radius: 2rem;
				margin: auto 1rem;
				padding: 1rem 3.5rem;
				font-size: clamp(0.3725rem, 0rem + 5vw, 1.5rem);
				color: ${theme.text.color.gray};
			}
		`,
	active: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.yellow};
		`,
	draftModeList: () => (theme: Theme) =>
		css`
			height: clamp(15rem, 0rem + 200vw, 60rem);
			width: 100%;
			border: 1px solid ${theme.border.primary};
			border-radius: 0.5rem;
			padding: 0.5rem;
			display: grid;
			grid-gap: 0.5rem;
			grid-template-rows: repeat(auto-fit, 9rem);
			grid-template-columns: repeat(auto-fit, 9rem);
			overflow: auto;

			& > button {
				cursor: pointer;
			}
		`,
};

export default style;
