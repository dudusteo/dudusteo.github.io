import { css } from "@emotion/react";

const style = {
	heroBadge: (theme) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 12rem;
		height: 12rem;

		::before {
			content: "";
			position: absolute;
			height: 10.6rem;
			width: 10.6rem;
			background: url(https://static.smilegatemegaport.com/event/live/epic7/guide/hunt/images/hero_frame.png)
				no-repeat center;
			background-size: contain;
		}
	`,
	image: (theme) => css`
		display: flex;
		width: 10rem;
		height: 10rem;

		& > img {
			height: 10rem;
		}
	`,
	elevatedIcons: (theme) => css`
		display: flex;
		justify-content: center;
		position: absolute;
		height: 10rem;
		width: 11rem;
	`,

	topSection: (theme) => css`
		img {
			height: 3.5rem;
		}
		img:first-of-type {
			margin-right: 4rem;
		}
	`,
	bottomSection: (theme) => css`
		img {
			align-self: end;
			height: 2rem;
		}
	`,
};

export default style;
