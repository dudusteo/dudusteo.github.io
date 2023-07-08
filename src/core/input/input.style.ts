import { css } from "@emotion/react";

const style = {
	container: (theme) => css`
		& > input {
			text-align: right;
			color: ${theme.text.color.gray};
			opacity: 1;
			width: 100px;
			&:hover {
				opacity: 0.5;
			}
			::placeholder {
				opacity: 0.5;
			}

			::focus {
				outline: none;
			}
		}
	`,
};

export default style;
