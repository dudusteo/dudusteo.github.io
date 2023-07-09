import { Theme, css } from "@emotion/react";

//480 840 1 : 0.58 // 30rem  x 52rem

// 34 (32 + 2x1) REM max
// 10 (8 + 2x1) REM min

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
				color: ${theme.text.color.yellow};
				font-weight: bold;

				.autocomplete-input {
					font-size: 2rem;
				}
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
};

export default style;
