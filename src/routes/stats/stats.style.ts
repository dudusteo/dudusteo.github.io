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
		`,
	// 0 / 850 size of 6 rem
	topCard: () => (theme: Theme) =>
		css`
			background: linear-gradient(to right, #000000d0, #00000080 100%);

			grid-area: top;
			padding: 1rem 1.5rem;

			font-weight: bold;

			display: flex;
			align-items: center;

			.autocomplete {
				color: ${theme.text.color.yellow};
				font-size: clamp(0.5rem, -0.125rem + 6.25vw, 2rem);
			}
		`,
	autocompleteListbox: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.yellow};
		`,
	// 95 / 850 size of 28 rem
	middleCard: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.white};
			grid-area: mid;

			.manual-stats {
				padding: 0.5rem 1rem;
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: repeat(
					9,
					clamp(0.75rem, -0.1875rem + 9.375vw, 3rem)
				);
				& > div {
					display: flex;
					img {
						padding-right: 0.75rem;
						height: clamp(0.75rem, -0.1875rem + 9.375vw, 3rem);
						filter: brightness(255);
					}
					input {
						font-size: clamp(
							0.375rem,
							-0.0938rem + 4.6875vw,
							1.5rem
						);
						color: ${theme.text.color.white};
					}
				}
			}
		`,
	// 565 / 850 size of 18 rem
	bottomCard: () => (theme: Theme) =>
		css`
			background: linear-gradient(to right, #000000d0, #00000080 100%);

			grid-area: bottom;
			padding: 1rem;
			.top-section {
				.artifact-slot {
					height: clamp(2.75rem, -0.6875rem + 34.375vw, 11rem);
					width: clamp(2.75rem, -0.6875rem + 34.375vw, 11rem);
				}
			}

			.bottom-section {
				display: flex;
				justify-content: space-between;

				color: white;
			}
		`,
};

export default style;
