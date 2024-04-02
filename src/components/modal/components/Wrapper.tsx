import { ComponentProps, useEffect } from "react";
import { useModalCtrl } from "../hooks/useModalCtrl";

export const Wrapper = ({
  children,
  style,
  closeOnEscape,
  ...props
}: ComponentProps<"div"> & { closeOnEscape?: boolean }) => {
  const { close } = useModalCtrl();
  console.log(closeOnEscape);
  useEffect(() => {
    const escapeHanler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) close();
    };

    window.addEventListener("keydown", escapeHanler);

    return () => {
      window.removeEventListener("keydown", escapeHanler);
    };
  }, []);

  return (
    <div
      style={{
        boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)",
        position: "absolute",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: 20,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
