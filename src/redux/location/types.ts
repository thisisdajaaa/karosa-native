export const ACT_REGION_REQUEST = "auth/actRegionRequest" as const;
export const ACT_REGION_SUCCESS = "auth/actRegionSuccess" as const;
export const ACT_REGION_FAILURE = "auth/actRegionFailure" as const;

export type Types =
  | typeof ACT_REGION_REQUEST
  | typeof ACT_REGION_SUCCESS
  | typeof ACT_REGION_FAILURE;
