import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { registerLicense } from '@syncfusion/ej2-base';

const container = document.getElementById("root");
const root = createRoot(container);

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmpCe0x3RXxbf1x0ZFFMYllbQHZPIiBoS35RckVnWH9fdnBWQmJfVEJ+');

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
