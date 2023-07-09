import { css } from "@emotion/react";

// minimum VP 46EM max 82EM
// max height 51EM

const style = {
	background: () => () =>
		css`
			background: linear-gradient(
					to bottom,
					#000000ff,
					#80000020 40%,
					#80000020 60%,
					#000000ff 100%
				),
				linear-gradient(
					to right,
					#000000ff,
					#80000020 40%,
					#80000020 60%,
					#000000ff 100%
				);
		`,
	build: () => () =>
		css`
			margin: auto auto;
			padding: 3em;
			display: grid;
			grid-template-rows: clamp(20rem, -11.9444rem + 69.4444vw, 45rem);
			grid-template-columns:
				auto minmax(20em, 36em) minmax(20em, 40em)
				auto;
			grid-template-areas: ". left right .";

			@media (width <= 46em) {
				grid-template-rows: clamp(20rem, 3.1387rem + 58.3942vw, 30rem);
				grid-template-columns: auto;
				grid-template-areas: "right" "left";
			}
		`,
	stats: () => () =>
		css`
			grid-area: left;
			display: grid;
			grid-template-rows: 1fr 0.5fr 0.5fr 2fr;
			grid-template-areas: "top" "." "." "bottom";

			& > div:nth-of-type(4) {
				align-self: end;
				grid-area: bottom;
			}
		`,
	hero: () => () =>
		css`
			grid-area: right;

			& > * {
				height: clamp(20rem, -11.9444rem + 69.4444vw, 45rem);
				@media (width <= 46em) {
					height: clamp(20rem, 3.1387rem + 58.3942vw, 30rem);
				}
			}
		`,
	items: () => () =>
		css`
			display: grid;
			grid-area: right;
			grid-template-rows: repeat(4, 1fr);
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas:
				". artifact"
				"item1 item4"
				"item2 item5"
				"item3 item6";

			.artifact-slot {
				grid-area: artifact;
				justify-self: end;
			}
			.item-slot {
				margin: 0em 0.6em;
				z-index: 1;
				align-self: center;
				&:nth-of-type(1) {
					grid-area: item1;
					justify-self: start;
				}
				&:nth-of-type(2) {
					grid-area: item2;
					justify-self: start;
				}
				&:nth-of-type(3) {
					grid-area: item3;
					justify-self: start;
				}
				&:nth-of-type(4) {
					grid-area: item4;
					justify-self: end;
				}
				&:nth-of-type(5) {
					grid-area: item5;
					justify-self: end;
				}
				&:nth-of-type(6) {
					grid-area: item6;
					justify-self: end;
				}
			}
		`,
};

export default style;
