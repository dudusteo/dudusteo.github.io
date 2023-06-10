import { css } from "@emotion/react/macro";

const style = {
	epic7: (input) => (theme) =>
		css`
			display: flex;
			& > * {
				&:hover {
					background-color: #ffffff0f;
				}
				display: flex;
				align-items: center;
				justify-content: center;
				border: 2px solid ${theme.border.primary};
				border-radius: 15px;
				flex: 1 1 0px;
			}
		`,
};

export default style;
