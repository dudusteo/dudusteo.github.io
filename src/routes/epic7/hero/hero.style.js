import { css } from "@emotion/react/macro";

const style = {
	hero: (input) => (theme) =>
		css`
			display: grid;
			grid-template-rows: repeat(3, 1fr);
			grid-template-columns: repeat(5, 1fr);
			grid-template-areas:
				"item1 . . . item4"
				"item2 . . . item5"
				"item3 . . . item6";
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

			button {
				&:nth-of-type(1) {
					justify-self: end;
					grid-area: item1;
				}
				&:nth-of-type(2) {
					justify-self: end;
					grid-area: item2;
				}
				&:nth-of-type(3) {
					justify-self: end;
					grid-area: item3;
				}
				&:nth-of-type(4) {
					grid-area: item4;
				}
				&:nth-of-type(5) {
					grid-area: item5;
				}
				&:nth-of-type(6) {
					grid-area: item6;
				}
			}

			margin: auto;
		`,
};

export default style;
