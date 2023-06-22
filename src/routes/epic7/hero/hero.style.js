import { css } from "@emotion/react/macro";

const style = {
	background: (input) => (theme) =>
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
	build: (input) => (theme) =>
		css`
			margin: auto auto;
			padding: 3em;
			display: grid;
			grid-template-columns: 28em 40em;
			grid-template-areas: "left right";
			grid-template-rows: 39em;
		`,
	stats: (input) => (theme) =>
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
	hero: (input) => (theme) =>
		css`
			margin: -3em -9em;
			grid-area: right;

			height: 45em;
			min-width: 57em;
			& > * {
				height: 100%;
			}
		`,
	items: (input) => (theme) =>
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

			.artifactSlot {
				grid-area: artifact;
				justify-self: end;
			}
			.itemSlot {
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
