import { css } from "@emotion/react";

const size = 9;

const style = {
	heroBadge: (theme) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${size}rem;
		height: ${size}rem;
		position: relative;

		::before {
			content: "";
			position: absolute;
			height: ${(size / 12) * 10.6}rem;
			width: ${(size / 12) * 10.6}rem;
			background: url(https://static.smilegatemegaport.com/event/live/epic7/guide/hunt/images/hero_frame.png)
				no-repeat center;
			background-size: contain;
		}
	`,
	image: (theme) => css`
		display: flex;
		width: ${(size / 12) * 10}rem;
		height: ${(size / 12) * 10}rem;

		& > img {
			height: ${(size / 12) * 10}rem;
		}
	`,
	elevatedIcons: (theme) => css`
		display: flex;
		justify-content: center;
		position: absolute;
		height: ${(size / 12) * 10}rem;
		width: ${(size / 12) * 11}rem;
	`,

	topSection: (theme) => css`
		img {
			height: ${(size / 12) * 3.5}rem;
		}
		img:first-of-type {
			margin-right: ${(size / 12) * 4}rem;
		}
	`,
	bottomSection: (theme) => css`
		img {
			align-self: end;
			height: ${(size / 12) * 2}rem;
		}
	`,
};

export default style;
