export const createStore = <T extends any>(initialValue: T) => {
  let state = initialValue;
  const callbacks = new Set<(state?: T) => any>();

  const getState = () => state;
  const setState = (newState: T | ((state: T) => any)) => {
    state =
      typeof newState === "function"
        ? (newState as (state: T) => T)(state)
        : newState;

    callbacks.forEach((callback) => callback(state));
  };

  const subscribe = (callback: (state?: T) => any) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  };

  return { getState, setState, subscribe } as const;
};
