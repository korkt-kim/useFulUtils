import { useDeepEffect } from "../../hooks/useDeepEffect";
import { useEffect, useState } from "react";

export const UseDeepEffect = () => {
  const [shot, setShot] = useState(0);
  return (
    <>
      <ChildrenWithUseEffect name={{ firstName: "kt", lastName: "k" }} />
      <ChildrenWithUseDeepEffect name={{ firstName: "kt", lastName: "k" }} />
      <button onClick={() => setShot((prev) => prev + 1)}>Rerender!!!</button>
    </>
  );
};

const ChildrenWithUseEffect = (props: {
  name: { firstName: string; lastName: string };
}) => {
  const [rerenderCount, setRerenderCount] = useState(0);
  useEffect(() => {
    setRerenderCount((prev) => prev + 1);
  }, [props.name]);
  return <div>rerenderCount: {rerenderCount}</div>;
};

const ChildrenWithUseDeepEffect = (props: {
  name: { firstName: string; lastName: string };
}) => {
  const [rerenderCount, setRerenderCount] = useState(0);
  useDeepEffect(() => {
    setRerenderCount((prev) => prev + 1);
  }, [props.name]);
  return <div>rerenderCount: {rerenderCount}</div>;
};
