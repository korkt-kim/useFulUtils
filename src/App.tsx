import { CreateStateContext } from "./pages/CreateStateContext";
import "./styles.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateStateContext />} />
      </Routes>
    </BrowserRouter>
  );
}
