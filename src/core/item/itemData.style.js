import { css } from "@emotion/react/macro";

const style = {
	item: (input) => (theme) =>
		css`
			border: 2px solid ${theme.border.primary};
			padding: 1em;
			border-radius: 15px;
			margin: 3em;
		`,
	colorFromRarity: (activeColor) => (theme) =>
		css`
			color: ${theme.rank[activeColor]};
		`,
	size: (size) => (theme) =>
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
	text: (type, size) => (theme) =>
		css`
			span,
			input,
			select {
				color: ${type === "title" || type === "substat_head"
					? theme.text.white
					: theme.text.gray};
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
