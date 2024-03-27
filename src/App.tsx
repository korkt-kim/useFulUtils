import "./styles.css";
import { Link } from "react-router-dom";

const menus = ["CreateStateContext", "UseSubscribeState"];

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
