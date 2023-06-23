import { css } from "@emotion/react/macro";

const style = {
	background: (rank) => (theme) =>
		css`
			cursor: pointer;
			border: 2px solid ${theme.border.secondary};
			border-radius: 15px;
			height: 6em;
			width: 6em;
			padding: 0.2em;

			background: linear-gradient(
					to top,
					#30303030,
					#30303030 40%,
					#30303040 60%,
					#30303050 100%
				),
				linear-gradient(
					to right,
					#30303030,
					#30303030 40%,
					#30303040 60%,
					#30303050 100%
				);
		`,
};

export default style;
