import { css } from "@emotion/react/macro";

const style = {
	background: (input) => (theme) =>
		css`
			padding: 3em;
			display: grid;
			grid-template-columns: 1fr 2fr 1fr;
			grid-template-areas: "left middle right";
			height: 40em;

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
	stats: (input) => (theme) =>
		css`
			grid-area: left;

			display: grid;
			grid-template-rows: 3fr 2fr;
			grid-template-areas: "top" "bottom";
			& > div {
				align-self: end;
				grid-area: bottom;
			}
		`,
	hero: (input) => (theme) =>
		css`
			grid-area: middle;
			height: 34em;
			& > * {
				height: 100%;
			}
		`,
	items: (input) => (theme) =>
		css`
			display: grid;
			grid-area: middle;
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
	characters: (input) => (theme) =>
		css`
			z-index: 1;
			grid-area: right;
			color: #ffffff;
		`,
};

export default style;
