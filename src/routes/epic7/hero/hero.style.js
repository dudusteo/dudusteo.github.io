import { css } from "@emotion/react/macro";

const style = {
	background: (input) => (theme) =>
		css`
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
			position: absolute;
			width: 100%;
			img {
				height: 50rem;
				position: absolute;
				left: 50%;
				transform: translate(-50%, 0%);
			}
		`,
	artifacts: (input) => (theme) =>
		css`
			display: grid;
		`,
	items: (input) => (theme) =>
		css`
			display: grid;
			grid-template-rows: repeat(3, 1fr);
			grid-template-columns: repeat(4, 1fr);
			grid-template-areas:
				". item1 item4 ."
				". item2 item5 ."
				". item3 item6 .";
			grid-gap: 10px;

			div {
				z-index: 1;
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
