import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		primary: string;
		secondary: string;
		border: {
			primary: string;
			secondary: string;
		};
		text: {
			size: {
				[x: string]: number;
			};
			color: {
				[x: string]: string;
			};
		};
		button: {
			size: {
				[x: string]: number;
			};
			color: {
				[x: string]: {
					start: string;
					end: string;
				};
			};
		};
		rank: {
			[x: string]: string;
		};
	}
}
