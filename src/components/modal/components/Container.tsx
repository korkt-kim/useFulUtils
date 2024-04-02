import { PropsWithChildren } from "react";

export const Container = (props: PropsWithChildren) => {
  return (
    <div
      style={{
        zIndex: 1000,
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  );
};
