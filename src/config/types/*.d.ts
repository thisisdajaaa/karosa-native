declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module "@env" {
  export const KAROSA_IOS: string;
  export const KAROSA_ANDROID: string;
}
