import { Theme, css } from "@emotion/react";

//480 840 1 : 0.58 // 30rem  x 52rem

// 10 (8 + 2x1) REM min (1x)
// 34 (32 + 2x1) REM max (4x)

const style = {
	stats: () => () =>
		css`
			display: flex;
			justify-content: center;
		`,
	build: () => (theme: Theme) =>
		css`
			border: 1px solid ${theme.border.primary};
			border-radius: 0.5rem;

			display: grid;
			grid-template-columns: clamp(7.5rem, -1.875rem + 93.75vw, 30rem);

			grid-template-rows:
				clamp(1.25rem, -0.7292rem + 19.7917vw, 6rem)
				clamp(7rem, -1.75rem + 87.5vw, 28rem)
				clamp(4.5rem, -1.125rem + 56.25vw, 18rem);
			grid-template-areas: "top" "mid" "bottom";

			// 0 / 850 size of 6 rem
			.top-card {
				background: linear-gradient(
					to right,
					#000000d0,
					#00000080 100%
				);

				grid-area: top;
				padding: 1rem;

				font-weight: bold;

				display: flex;
				align-items: center;
			}

			// 95 / 850 size of 28 rem
			.middle-card {
				color: ${theme.text.color.white};
				grid-area: mid;
			}

			// 565 / 850 size of 18 rem
			.bottom-card {
				background: linear-gradient(
					to right,
					#000000d0,
					#00000080 100%
				);
				grid-area: bottom;
				padding: 1rem;
			}
		`,
	autocompleteInput: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.yellow};
			font-size: clamp(0.5rem, -0.125rem + 6.25vw, 2rem);
		`,
	autocompleteListbox: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.yellow};
		`,
};

export default style;
