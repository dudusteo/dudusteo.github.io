import style from "./footer.style";

const Footer = () => {
	return (
		<div css={style.footer}>
			<span>
				This website is an unofficial fan site created by DuDuSteo. It
				is not affiliated with or endorsed by Smilegate Megaport, the
				developers of "Epic Seven."
			</span>
			<span>
				The content on this site is generated by fans for the purpose of
				discussing and celebrating the game.
			</span>
		</div>
	);
};

export default Footer;
