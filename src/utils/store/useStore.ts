import { useState, useEffect } from "react";
import { createStore } from "./createStore";

export const useStore = <
  R extends ReturnType<ReturnType<typeof createStore>["getState"]>,
>(
  store: ReturnType<typeof createStore<R>>,
) => {
  const [state, setState] = useState<R>(store.getState());

  //   const onChangeState = (next: any) => {
  //     setState(next);
  //     store.setState(next);
  //   };

  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => {
      if (!newState) {
        return;
      }

      setState(newState);
    });

    return () => unsubscribe();
  }, [store]);

  return [state, store.setState] as const;
};
