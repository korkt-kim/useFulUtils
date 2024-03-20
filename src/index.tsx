import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateStateContext } from "./pages/CreateStateContext";
import App from "./App";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/useContextFactory" element={<CreateStateContext />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
