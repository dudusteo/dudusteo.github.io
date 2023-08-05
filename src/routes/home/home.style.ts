import { Theme, css } from "@emotion/react";

const style = {
	home: () => (theme: Theme) =>
		css`
			color: ${theme.text.color.white};
		`,
};

export default style;
