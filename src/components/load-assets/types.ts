import { ReactElement } from "react";
import * as Font from "expo-font";

export type FontSource = Parameters<typeof Font.loadAsync>[0];

export type Props = {
  fonts?: FontSource;

  assets?: number[];

  children: ReactElement | ReactElement[];
};
