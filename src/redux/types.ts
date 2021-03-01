// eslint-disable-next-line @typescript-eslint/naming-convention
export interface StateAll {}
export const RESET_STATE = "resetState" as const;
export const RESET_ALL_STATE = "resetAllState" as const;
export type Types = typeof RESET_STATE | typeof RESET_ALL_STATE;
