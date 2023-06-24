import { Theme, css } from "@emotion/react";

const style = {
	statTable: () => () =>
		css`
			height: fit-content;
		`,
	statRow: () => () =>
		css`
			display: grid;
			grid-template-columns: 2.5fr 1fr 1.2fr;
			span:nth-of-type(2) {
				justify-self: end;
			}
		`,
	text: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.gray};
			font-size: clamp(1rem, -0.0222rem + 2.2222vw, 1.8rem);
		`,
	additionalText: () => () =>
		css`
			margin-left: 0.5em;
			color: #ac5002;
		`,
};

export default style;
