import { useEffect } from "react";
import { Asset } from "expo-asset";

export const usePromiseAll = (
  promises: Promise<void | Asset[]>[],
  cb: () => void
) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);

      cb();
    })();
  });
