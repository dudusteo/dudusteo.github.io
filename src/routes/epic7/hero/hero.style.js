import { css } from "@emotion/react/macro";

const style = {
	background: (input) => (theme) =>
		css`
			display: grid;
			grid-template-columns: 1fr 2fr 1fr;
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
	hero: (input) => (theme) =>
		css`
			z-index: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			& > div {
				/* position: absolute; */
			}
		`,
	items: (input) => (theme) =>
		css`
			display: grid;
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
			color: #ffffff;
		`,
};

export default style;
