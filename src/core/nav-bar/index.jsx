import * as React from "react";

import styles from "./navBar.module.css";

const NavBar = () => {
	return (
		<ul className={styles.nav_bar}>
			<a href="#/epic7/gear-score-calculator">
				<button className={styles.button}>Gear Score Calculator</button>
			</a>
			<a className={styles.item} href="#/epic7/hero">
				<button className={styles.button}>Builder</button>
			</a>
		</ul>
	);
};

export default NavBar;
