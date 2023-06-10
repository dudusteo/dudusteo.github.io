import { css } from "@emotion/react/macro";

const style = {
	hero: (input) => (theme) =>
		css`
			display: flex;
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
			margin: auto;
		`,
};

export default style;
