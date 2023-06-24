import { Theme, css } from "@emotion/react";

const style = {
	background: () => () =>
		css`
			background-color: black;
		`,

	artifact: () => (theme: Theme) =>
		css`
			border: 2px solid ${theme.border.primary};
			padding: 1em;
			border-radius: 15px;
		`,
	colorFromRarity: (activeColor: string) => (theme: Theme) =>
		css`
			color: ${theme.rank[activeColor]};
		`,
	size: (size: string) => (theme: Theme) =>
		css`
			span,
			input,
			select {
				font-size: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: size === "small"
					? theme.text.size.small + "px"
					: theme.text.size.tiny + "px"};
				line-height: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: size === "small"
					? theme.text.size.small + "px"
					: theme.text.size.tiny + "px"};
				height: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: size === "small"
					? theme.text.size.small + "px"
					: theme.text.size.tiny + "px"};
			}
		`,
	text: (type: string, size: string) => (theme: Theme) =>
		css`
			span,
			input,
			select {
				color: ${type === "title" || type === "substat_head"
					? theme.text.color.white
					: theme.text.color.gray};
				font-size: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: size === "small"
					? theme.text.size.small + "px"
					: theme.text.size.tiny + "px"};
				line-height: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: size === "small"
					? theme.text.size.small + "px"
					: theme.text.size.tiny + "px"};
				height: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: size === "small"
					? theme.text.size.small + "px"
					: theme.text.size.tiny + "px"};
			}
			option {
				font-size: ${theme.text.size.small + "px"};
				color: fieldtext;
			}
			img {
				filter: ${type === "title" || type === "substat_head"
					? "brightness(255)"
					: "none"};
				line-height: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: theme.text.size.small + "px"};
				width: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: theme.text.size.small + "px"};
				height: ${size === "large"
					? theme.text.size.large + "px"
					: size === "medium"
					? theme.text.size.medium + "px"
					: theme.text.size.small + "px"};
			}
		`,
};

export default style;
