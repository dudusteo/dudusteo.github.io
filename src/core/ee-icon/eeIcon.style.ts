import { Theme, css } from "@emotion/react";

const size = 10;

const style = {
	eeIcon: () => (theme: Theme) =>
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			width: ${size}rem;
			height: ${size}rem;
			position: relative;
		`,
	number: (number: number) => (theme: Theme) =>
		css`
			position: absolute;
			right: 0;
			bottom: 0;
			margin-bottom: 1.5rem;
			margin-right: 2rem;
			height: 2.25rem;
			width: 3.9375rem;
			color: white;
			display: block;
			text-shadow: 1px 1px 2px black;
			background: url(https://static.smilegatemegaport.com/event/live/epic7/guide/hunt/images/ico_num.png)
				no-repeat 0 50% / auto 100%;
			background-position-x: ${(number - 1) * 50}%;
		`,
	image: (theme) => css`
		height: ${(size / 12) * 11}rem;
	`,
};

export default style;
