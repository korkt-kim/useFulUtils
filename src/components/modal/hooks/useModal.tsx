import { useState, useCallback, useMemo, createContext, FC } from "react";

import { CustomModalProps, CloseProps } from "../types";
import { Wrapper, Dimmed, Container } from "../components";
import FocusTrap from "focus-trap-react";

const DEFAULT_MODAL_SIZE = 400;

export const modalCtx = createContext<{
  close: (props?: CloseProps) => void;
} | null>(null);

export const useModal = () => {
  const [components, setComponents] = useState<CustomModalProps[]>([]);
  const open = useCallback(
    (props: CustomModalProps) => {
      setComponents([...components, props]);
    },
    [components],
  );

  const close = useCallback(
    (props?: CloseProps) => {
      if (components.length <= 0) return;

      components[components.length - 1].afterClose?.(props);
      setComponents(components.slice(0, -1));
    },
    [components],
  );

  const renderModal = useCallback(() => {
    return components.map((component, index) => {
      if ("component" in component) {
        return (
          <FocusTrap active={true}>
            <Container key={index}>
              <Dimmed closeOnDimmedClick={component.closeOnDimmedClick} />

              <Wrapper
                style={{
                  width:
                    component.size ??
                    (component.component as FC & { size: number }).size ??
                    DEFAULT_MODAL_SIZE,
                }}
                closeOnEscape={
                  index === components.length - 1 && component.closeOnEscape
                }
              >
                <component.component />
              </Wrapper>
            </Container>
          </FocusTrap>
        );
      }
    });
  }, [components]);

  return [
    { open },
    useMemo(() => {
      return (
        <modalCtx.Provider value={{ close }}>{renderModal()}</modalCtx.Provider>
      );
    }, [components]),
  ] as const;
};
