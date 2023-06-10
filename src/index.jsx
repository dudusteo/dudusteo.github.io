import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";

import "css-resetter";
import "./styles/main.css";
import theme from "./styles/theme";

import Home from "./routes/home";
import Epic7 from "./routes/epic7";
import GearScoreCalculator from "./routes/epic7/gear-score-calculator";
import Hero from "./routes/epic7/hero";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/epic7" element={<Epic7 />} />
					<Route
						path="/epic7/gear-score-calculator"
						element={<GearScoreCalculator />}
					/>
					<Route path="/epic7/hero" element={<Hero />} />
				</Routes>
			</HashRouter>
		</ThemeProvider>
	</React.StrictMode>
);
