import { useEventSubscribe } from "../../patterns/PubSub/eventHandle";
import { globalEventStore } from "../../App";
import { ComponentProps, useState } from "react";
import { Link } from "react-router-dom";

export const Event = () => {
  const store = useEventSubscribe(globalEventStore);
  const [data, setData] = useState();

  store.subscribe("fuck", (data) => {
    setData(data);
  });

  return (
    <>
      <MyButton>aasdf {data}</MyButton>
      <Link to="/">home</Link>
    </>
  );
};

export const Event2 = () => {
  const store = useEventSubscribe(globalEventStore);
  const [data, setData] = useState();

  store.subscribe("fuck", (data) => {
    setData(data);
  });

  return (
    <>
      <MyButton>dddd {data}</MyButton>
      <Link to="/">home</Link>
    </>
  );
};

const MyButton = ({ ...props }: ComponentProps<"button">) => {
  const { emit } = useEventSubscribe(globalEventStore);

  return (
    <button {...props} onClick={() => emit("fuck", Math.random())}>
      {props.children}
    </button>
  );
};
