import { useEffect } from "react";

export const useMount: typeof useEffect = (effect) => {
  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
