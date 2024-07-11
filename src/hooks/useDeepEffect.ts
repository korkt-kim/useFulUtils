import { useEffect, useRef } from "react";
import { isEqual } from "lodash-es";

export const useDeepEffect = (callback: () => any, deps: any[]) => {
  const isFirst = useRef(true);
  const prevDeps = useRef<any[] | null>(null);

  useEffect(() => {
    const isSame = isEqual(prevDeps.current, deps);
    if (!isFirst.current && isSame) {
      return;
    }
    isFirst.current = false;
    prevDeps.current = deps;

    return callback();
  }, deps);
};
