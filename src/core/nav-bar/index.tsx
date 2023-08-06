import style from "./navBar.style";

const NavBar = () => {
	return (
		<ul css={style.navBar}>
			<a href="#/">
				<button css={style.button}>Home</button>
			</a>
			{/* <a href="#/hero">
				<button css={style.button}>Builder</button>
			</a> */}
			{/* <a href="#/card">
				<button css={style.button}>Card</button>
			</a> */}
			<a href="#/draftmode">
				<button css={style.button}>Draft Mode</button>
			</a>
		</ul>
	);
};

export default NavBar;
