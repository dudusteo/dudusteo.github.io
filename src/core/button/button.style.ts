import { css } from "@emotion/react";

const style = {
	button: (color, size) => (theme) =>
		css`
			border-top: 2px solid ${theme.button.color[color].start};
			border-bottom: 2px solid ${theme.button.color[color].end};
			border-radius: 15px;
			padding: ${theme.text.size[size] * 0.5 +
			"px " +
			theme.text.size[size] * 0.5 * 3.0 +
			"px"};
			background: linear-gradient(
					to bottom,
					${theme.button.color[color].start + "ff"},
					${theme.button.color[color].start + "f0"} 60%,
					${theme.button.color[color].end + "00"} 100%
				),
				linear-gradient(
					to right,
					${theme.button.color[color].start + "ff"},
					${theme.button.color[color].end + "f0"} 50%,
					${theme.button.color[color].start + "ff"} 100%
				);
			color: ${theme.text.white};
			font-size: ${theme.text.size[size] + "px"};

			&:hover {
				cursor: pointer;
			}

			&:active {
				margin-top: 2px;
				border-bottom: none;
			}
		`,
};

export default style;
