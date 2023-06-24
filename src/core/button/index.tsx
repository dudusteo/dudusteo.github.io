import * as React from "react";

import style from "./button.style";

const Button = (props) => {
	const { onClick, children, size = "small", color = "green" } = props;
	return (
		<React.Fragment>
			<button
				css={style.button(color, size)}
				type="button"
				onClick={(e) => onClick()}
			>
				{children}
			</button>
		</React.Fragment>
	);
};

export default Button;
