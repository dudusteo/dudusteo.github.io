import { css } from "@emotion/react/macro";

const style = {
	statTable: (input) => (theme) =>
		css`
			height: fit-content;
		`,
	statRow: (input) => (theme) =>
		css`
			display: grid;
			grid-template-columns: 3fr 1fr 0.5fr 1fr;
			span:nth-of-type(2) {
				justify-self: end;
			}
			span:nth-of-type(3) {
				justify-self: end;
				color: #ac5002;
			}
			span:nth-of-type(4) {
				color: #ac5002;
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
