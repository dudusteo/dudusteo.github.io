import { HashRouter, Route, Routes } from "react-router-dom";

import { Theme, ThemeProvider } from "@emotion/react";

import NavBar from "./core/nav-bar";
import Hero from "./routes/hero";
import Card from "./routes/card";
import { Provider } from "react-redux";
import { store } from "./app/store";
import DraftMode from "./routes/draft-mode";

const theme: Theme = {
	primary: "#101010",
	secondary: "#564228",
	border: { primary: "#564228", secondary: "#333333" },
	text: {
		size: { tiny: 18, small: 21, medium: 25, large: 30 },
		color: {
			white: "#FFFFFF",
			gray: "#5D5D5D",
			gold: "#765E40",
			yellow: "#F2DE9E",
		},
	},
	button: {
		size: { medium: 5 },
		color: {
			green: { start: "#052415", end: "#6dd91f" },
			blue: { start: "#051025", end: "#42BAEE" },
		},
	},
	rank: {
		epic: "#F2412F",
		heroic: "#D759DF",
		rare: "#5587E2",
		good: "#5E9D3B",
		normal: "#878787",
	},
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<HashRouter>
					<NavBar />
					<Routes>
						<Route path="/hero" element={<Hero />} />
						<Route path="/card" element={<Card />} />
						<Route path="/draftmode" element={<DraftMode />} />
					</Routes>
				</HashRouter>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
