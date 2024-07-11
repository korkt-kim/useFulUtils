import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateStateContext } from "./pages/CreateStateContext";
import { UseStore, UseStore2 } from "./pages/UseStore";
import App from "./App";
import { createStore } from "./utils/store/createStore";
import { Event, Event2 } from "./pages/UseSubPub";
import { Modal } from "./pages/ComponentControlWithHook/Modal";
import { TableOfContents } from "./pages/Components/TableOfContents";
import { UseDeepEffect } from "./pages/Hooks/useDeepEffect";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

export const store = createStore<{ count: number }>({ count: 0 });

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/CreateStateContext" element={<CreateStateContext />} />
      <Route path="/UseStore" element={<UseStore />} />
      <Route path="/UseStore2" element={<UseStore2 />} />
      <Route
        path="/UseSubPub/Event"
        element={
          <>
            <Event />
            <Event2 />
          </>
        }
      />
      <Route path="/ComponentControlWithHook/Modal" element={<Modal />} />
      <Route path="/Components/TableOfContents" element={<TableOfContents />} />
      <Route path="/Hooks/useDeepEffect" element={<UseDeepEffect />} />
    </Routes>
  </BrowserRouter>,
);
