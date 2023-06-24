import { css } from "@emotion/react";

const style = {
	statTable: (input) => (theme) =>
		css`
			height: fit-content;
		`,
	statRow: (input) => (theme) =>
		css`
			display: grid;
			grid-template-columns: 2.5fr 1fr 1.2fr;
			span:nth-of-type(2) {
				justify-self: end;
			}
		`,
	text: (type, size) => (theme) =>
		css`
			color: ${theme.text.gray};
			font-size: clamp(1rem, -0.0222rem + 2.2222vw, 1.8rem);
		`,
	additionalText: (input) => (theme) =>
		css`
			margin-left: 0.5em;
			color: #ac5002;
		`,
};

export default style;
