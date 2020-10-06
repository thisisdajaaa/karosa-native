import { useState } from "react";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { FontSource } from "../components/load-assets/types";

import { usePromiseAll } from "./use-promise-all";

export const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false);

  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],

    () => setReady(true)
  );

  return ready;
};
