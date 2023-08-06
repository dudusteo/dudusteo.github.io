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
