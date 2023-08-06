import { Theme, css } from "@emotion/react";

//480 840 1 : 0.58 // 30rem  x 52rem

// 10 (8 + 2x1) REM min (1x)
// 34 (32 + 2x1) REM max (4x)

const style = {
	card: () => (theme: Theme) =>
		css`
			height: fit-content;
			width: fit-content;
			background: linear-gradient(
				to right,
				#000000a0,
				#000000a0 40%,
				#0000000f 80%,
				#00000000 100%
			);
			border: 1px solid ${theme.border.primary};
			border-radius: 0.5rem;

			display: grid;

			grid-template-columns: clamp(7.5rem, 0rem + 100vw, 30rem);
			grid-template-rows:
				clamp(1.5rem, 0rem + 20vw, 6rem)
				clamp(7rem, 0rem + 93.3333vw, 28rem)
				clamp(4.5rem, 0rem + 60vw, 18rem);
			grid-template-areas: "top" "mid" "bottom";
		`,
	heroBackground: () => () =>
		css`
			position: absolute;
			z-index: -1;

			width: clamp(7.5rem, 0rem + 100vw, 30rem);
			height: clamp(13rem, 0rem + 173.3333vw, 52rem);
			overflow: hidden;

			//update
			& > * {
				margin-top: -7%;
				margin-left: -50%;
				width: clamp(18.5rem, 0rem + 246.6667vw, 74rem);
				height: clamp(18.5rem, 0rem + 246.6667vw, 74rem);
			}
		`,
	// 0 / 850 size of 6 rem
	topCard: () => (theme: Theme) =>
		css`
			background: #00000060;

			grid-area: top;

			padding: clamp(0.25rem, 0rem + 3.3333vw, 1rem)
				clamp(0.375rem, 0rem + 5vw, 1.5rem);

			font-weight: bold;

			display: flex;
			align-items: center;

			color: ${theme.text.color.yellow};
			font-size: clamp(0.625rem, 0rem + 8.3333vw, 2.5rem);
		`,
	autocompleteListbox: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.yellow};
		`,
	// 95 / 850 size of 30 rem
	middleCard: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.white};
			grid-area: mid;

			.manual-stats {
				padding: clamp(0.125rem, 0rem + 1.6667vw, 0.5rem)
					clamp(0.25rem, 0rem + 3.3333vw, 1rem);
				display: grid;

				grid-template-columns: 1fr;
				grid-template-rows: repeat(
					9,
					clamp(0.75rem, 0rem + 10vw, 3rem)
				);

				& > div {
					display: flex;
					align-items: center;
					img {
						padding-right: 0.75rem;
						height: clamp(0.75rem, 0rem + 10vw, 3rem);
						filter: brightness(255);
					}
					span,
					input {
						font-size: clamp(0.625rem, 0rem + 8.3333vw, 2.5rem);
						color: ${theme.text.color.white};
					}
				}
			}

			.manual-details {
				width: clamp(4.75rem, 0rem + 33.3333vw, 19rem);
				padding: clamp(0.25rem, 0rem + 3.3333vw, 1rem)
					clamp(0.3725rem, 0rem + 5vw, 1.5rem);

				color: ${theme.text.color.white};

				span:first-of-type {
					font-size: clamp(0.625rem, 0rem + 8.3333vw, 2.5rem);
				}

				span:last-of-type {
					font-size: clamp(0.5rem, 0rem + 6.6666vw, 2rem);
				}
			}
		`,
	// 565 / 850 size of 16 rem
	bottomCard: () => () =>
		css`
			background: #00000060;

			grid-area: bottom;
			padding: clamp(0.25rem, 0rem + 3.3333vw, 1rem)
				clamp(0.3725rem, 0rem + 5vw, 1.5rem);
			.top-section {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.artifact-slot {
					height: clamp(2.5rem, 0rem + 33.3333vw, 10rem);
					width: clamp(2.5rem, 0rem + 33.3333vw, 10rem);
				}
			}

			.bottom-section {
				height: inherit;
				display: flex;
				justify-content: space-between;
				& > * {
					display: flex;
					gap: 0.3rem;
					align-items: center;
					& > img {
						height: clamp(1.125rem, 0rem + 15vw, 4.5rem);
					}
				}
			}
		`,
};

export default style;
