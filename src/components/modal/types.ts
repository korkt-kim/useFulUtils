import { ReactNode, FC } from "react";

export interface BaseModalProps {
  size?: number;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  closeOnDimmedClick?: boolean;
  afterClose?: (props?: CloseProps) => boolean;
  title?: ReactNode;
}

export interface CustomModalProps extends BaseModalProps {
  component: FC;
}

export interface CloseProps {
  closedBy: "button" | "dimmed" | "escape" | "closeButton";
  value: any;
}
