import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./epic7.style";
import { Link } from "react-router-dom";
import * as Image from "../../img/image";

const Epic7 = () => {
	return (
		<div css={style.epic7}>
			<Link to="/epic7/gear-score-calculator">
				<img alt="" src={Image.epic7_logo}></img>
			</Link>
			<div></div>
		</div>
	);
};

export default Epic7;
