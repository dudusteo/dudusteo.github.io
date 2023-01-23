import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "css-resetter";
import './styles/main.css'
import theme from "./styles/theme";

import Root from "./routes/root";
import Calculator from "./routes/calculator";

const router = createHashRouter([
  {
    path: "epic7",
    children: [
      {
        path: "calculators",
        children: [
          { path: "gear-score", element: <Calculator /> },
        ],
      }
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
