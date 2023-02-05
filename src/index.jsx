import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";

import "css-resetter";
import './styles/main.css'
import theme from "./styles/theme";

import Home from "./routes/home";
import Calculator from "./routes/calculator";
import Epic7 from "./routes/epic7";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/epic7" element={<Epic7 />} />
          <Route path="/epic7/calculators" element={<div>EPIC7 Calculators</div>} />
          <Route path="/epic7/calculators/gear-score" element={<Calculator />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
