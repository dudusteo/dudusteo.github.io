import * as React from "react";
import { Link } from "react-router-dom";

import * as Image from "../../img/image";

/** @jsxImportSource @emotion/react */
import style from "./home.style";

const Home = (props) => {
	return (
		<div css={style.home}>
			<Link to="/epic7">
				<img alt="" src={Image.epic7_logo}></img>
			</Link>
			<div></div>
		</div>
	);
};

export default Home;
