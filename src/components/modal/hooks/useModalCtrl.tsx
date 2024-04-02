import { useContext } from "react";
import { modalCtx } from "./useModal";

export const useModalCtrl = () => {
  const ctx = useContext(modalCtx);

  if (!ctx) {
    throw new Error("useModalCtrl must be used within a ModalProvider");
  }

  return ctx;
};
