import style from "./navBar.style";

const NavBar = () => {
	return (
		<ul css={style.navBar}>
			{/* <a href="#/epic7/gear-score-calculator">
				<button css={style.button}>Gear Score Calculator</button>
			</a> */}
			<a href="#/epic7/hero">
				<button css={style.button}>Builder</button>
			</a>
		</ul>
	);
};

export default NavBar;
