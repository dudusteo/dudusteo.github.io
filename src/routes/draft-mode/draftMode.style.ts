import { Theme, css } from "@emotion/react";

const style = {
	draftMode: () => (theme: Theme) =>
		css`
			display: flex;
			padding: auto auto;
		`,
	draftModeList: () => (theme: Theme) =>
		css`
			width: 100%;
			border: 1px solid ${theme.border.primary};
			border-radius: 0.5rem;
			display: grid;
			grid-template-rows: repeat(4, clamp(3rem, 0rem + 40vw, 12rem));
			grid-template-columns: repeat(
				auto-fit,
				clamp(3rem, 0rem + 40vw, 12rem)
			);

			& > button {
				cursor: pointer;
			}
		`,
};

export default style;
