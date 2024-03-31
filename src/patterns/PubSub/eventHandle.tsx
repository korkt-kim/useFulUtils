import { useEffect, useRef } from "react";

export const createEventStore = () => {
  const eventNames = new Set<{
    [eventName: string]: (...args: any) => unknown;
  }>();

  const emit = (eventName: string, ...args: any) => {
    eventNames.forEach((item) => {
      item[eventName]?.(...args);
    });
  };

  const subscribe = (eventName: string, handler: (...args: any) => unknown) => {
    const e = { [eventName]: handler };
    eventNames.add(e);
    const unsubscribe = () => {
      eventNames.delete(e);
    };
    return unsubscribe;
  };
  return { emit, subscribe };
};

export const useEventSubscribe = (
  store: ReturnType<typeof createEventStore>,
) => {
  const eventSubscribes = useRef<(() => void)[]>([]);
  useEffect(() => {
    return () => {
      console.log("unsubscribe ", eventSubscribes.current);
      eventSubscribes.current.forEach((item) => item());
    };
  }, []);

  return {
    emit: store.emit,
    subscribe: (eventName: string, handler: (...args: any) => unknown) => {
      const unsubscribe = store.subscribe(eventName, handler);
      eventSubscribes.current = [...eventSubscribes.current, unsubscribe];
    },
  };
};
