declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";

  const content: React.FC<SvgProps>;
  export default content;
}

declare module "@env" {
  export const KAROSA_IOS: string;
  export const KAROSA_ANDROID: string;
  export const KAROSA_APP_ID: string;
  export const API_URL: string;
  export const GOOGLE_PLACES_API_KEY: string;
  export const GOOGLE_GEOCODER_API_URL: string;
}
