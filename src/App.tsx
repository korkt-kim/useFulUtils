import { createEventStore } from "./patterns/PubSub/eventHandle";
import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const menus = [
  "CreateStateContext",
  "UseStore",
  "UseSubPub/Event",
  "ComponentControlWithHook/Modal",
  "Components/TableOfContents",
  "Hooks/useDeepEffect",
];
export const globalEventStore = createEventStore();

export default function App() {
  return (
    <ul>
      {menus.map((menu) => {
        return (
          <li key={menu}>
            <Link to={menu}>{menu}</Link>
          </li>
        );
      })}
    </ul>
  );
}
