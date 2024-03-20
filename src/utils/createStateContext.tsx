import React, { createContext, useContext, type ReactNode } from "react";
/**
 * Context Provider와 useContext Custom Hook을 반환하는 팩토리 함수
 */
export const createStateContext = <T extends any>() => {
  const Context = createContext<T | null>(null);

  const Provider = ({
    initialValue,
    children,
  }: {
    initialValue: T | null;
    children: ReactNode;
  }) => {
    return <Context.Provider value={initialValue}>{children}</Context.Provider>;
  };

  const useStateContext = () => {
    const context = useContext(Context);
    if (context === null) throw new Error("not in provider");

    return context;
  };

  return { Provider, useStateContext } as const;
};
