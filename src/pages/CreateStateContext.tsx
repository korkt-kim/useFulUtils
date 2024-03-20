import React, { Dispatch, SetStateAction, useState } from "react";
import { createStateContext } from "../utils/createStateContext";

const { Provider, useStateContext } = createStateContext<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}>();

export const CreateStateContext = () => {
  const [value, setValue] = useState(0);
  return (
    <Provider initialValue={{ count: value, setCount: setValue }}>
      <Children />
    </Provider>
  );
};

const Children = () => {
  const ctx = useStateContext();
  return (
    <div>
      {ctx.count}
      <button onClick={() => ctx.setCount(ctx.count - 1)}>-</button>
      <button onClick={() => ctx.setCount(ctx.count + 1)}>+</button>
    </div>
  );
};
