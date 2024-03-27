import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateStateContext } from "./pages/CreateStateContext";
import {
  UseSubscribeState,
  UseSubscribeState2,
} from "./pages/UseSubscribeState";
import App from "./App";
import { createStore } from "./utils/store/createStore";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

export const store = createStore<{ count: number }>({ count: 0 });

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CreateStateContext" element={<CreateStateContext />} />
        <Route path="/UseSubscribeState" element={<UseSubscribeState />} />
        <Route path="/UseSubscribeState2" element={<UseSubscribeState2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
