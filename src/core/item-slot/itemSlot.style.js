import { css } from "@emotion/react/macro";

const style = {
	background: (rank) => (theme) =>
		css`
			border: 2px solid ${theme.border.secondary};
			height: 6em;
			width: 6em;
			padding: 0.2em;
			border-radius: 15px;

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
