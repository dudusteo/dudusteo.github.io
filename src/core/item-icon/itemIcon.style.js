import { css } from "@emotion/react/macro";

const style = {
	item: (rank) => (theme) =>
		css`
			height: 100%;
			width: 100%;
			background: linear-gradient(
					to bottom,
					#000000ff,
					${theme.rank[rank] + "20"} 40%,
					${theme.rank[rank] + "20"} 60%,
					#000000ff 100%
				),
				linear-gradient(
					to right,
					#000000ff,
					${theme.rank[rank] + "20"} 40%,
					${theme.rank[rank] + "20"} 60%,
					#000000ff 100%
				);
		`,
	text: (rank) => (theme) =>
		css`
			color: ${theme.text.gold};
		`,
};

export default style;
