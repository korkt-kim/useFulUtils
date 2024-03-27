import { Link } from "react-router-dom";
import { useStore } from "../utils/store/useStore";

import { store } from "..";

export const UseSubscribeState = () => {
  const [state, setState] = useStore(store);

  return (
    <div>
      {state.count}
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
      <Link to="/UseSubscribeState2">to UseSubscribeState2</Link>
    </div>
  );
};

export const UseSubscribeState2 = () => {
  const [state, setState] = useStore(store);

  return (
    <div>
      {state.count}
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
      <Link to="/UseSubscribeState">to UseSubscribeState</Link>
    </div>
  );
};
