import { css } from "@emotion/react";

const size = 12;

const style = {
	heroBadge: (theme) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: clamp(3rem, 0rem + 40vw, 12rem);
		height: clamp(3rem, 0rem + 40vw, 12rem);

		::before {
			content: "";
			position: absolute;
			height: clamp(2.65rem, 0rem + 35.3333vw, 10.6rem);
			width: clamp(2.65rem, 0rem + 35.3333vw, 10.6rem);
			background: url(https://static.smilegatemegaport.com/event/live/epic7/guide/hunt/images/hero_frame.png)
				no-repeat center;
			background-size: contain;
		}
	`,
	image: (theme) => css`
		display: flex;
		width: clamp(2.5rem, 0rem + 33.3333vw, 10rem);
		height: clamp(2.5rem, 0rem + 33.3333vw, 10rem);

		& > img {
			height: clamp(2.5rem, 0rem + 33.3333vw, 10rem);
		}
	`,
	elevatedIcons: (theme) => css`
		display: flex;
		justify-content: center;
		position: absolute;
		height: clamp(2.5rem, 0rem + 33.3333vw, 10rem);
		width: 11rem;
	`,

	topSection: (theme) => css`
		img {
			height: clamp(0.875rem, 0rem + 11.6666vw, 3.5rem);
		}
		img:first-of-type {
			margin-right: clamp(1rem, 0rem + 13.333vw, 4rem);
		}
	`,
	bottomSection: (theme) => css`
		img {
			align-self: end;
			height: clamp(0.5rem, 0rem + 6.6666vw, 2rem);
		}
	`,
};

export default style;
