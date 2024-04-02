import { PropsWithChildren, forwardRef } from "react";

export const Container = forwardRef<HTMLDivElement, PropsWithChildren>(
  function (props, ref) {
    return (
      <div
        ref={ref}
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
  },
);
