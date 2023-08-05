import { Theme, css } from "@emotion/react";

const style = {
	draftMode: () => (theme: Theme) =>
		css`
			background-color: white;
		`,
	draftModeList: () => (theme: Theme) =>
		css`
			background-color: black;
			display: grid;
		`,
};

export default style;
