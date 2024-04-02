import { useModalCtrl } from "../hooks/useModalCtrl";

export interface DimmedProps {
  closeOnDimmedClick?: boolean;
}

export const Dimmed = (props: DimmedProps) => {
  const { close } = useModalCtrl();

  return (
    <div
      onClick={() => props.closeOnDimmedClick && close()}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "grey",
        opacity: 0.5,
      }}
    />
  );
};
