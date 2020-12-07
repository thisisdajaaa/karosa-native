export const ACT_REGION_REQUEST = "auth/actRegionRequest" as const;
export const ACT_REGION_SUCCESS = "auth/actRegionSuccess" as const;
export const ACT_REGION_FAILURE = "auth/actRegionFailure" as const;

export const ACT_PROVINCE_REQUEST = "auth/actProvinceRequest" as const;
export const ACT_PROVINCE_SUCCESS = "auth/actProvinceSuccess" as const;
export const ACT_PROVINCE_FAILURE = "auth/actProvinceFailure" as const;

export const ACT_BARANGAY_REQUEST = "auth/actBarangayRequest" as const;
export const ACT_BARANGAY_SUCCESS = "auth/actBarangaySuccess" as const;
export const ACT_BARANGAY_FAILURE = "auth/actBarangayFailure" as const;

export type Types =
  | typeof ACT_REGION_REQUEST
  | typeof ACT_REGION_SUCCESS
  | typeof ACT_REGION_FAILURE
  | typeof ACT_PROVINCE_REQUEST
  | typeof ACT_PROVINCE_SUCCESS
  | typeof ACT_PROVINCE_FAILURE
  | typeof ACT_BARANGAY_REQUEST
  | typeof ACT_BARANGAY_SUCCESS
  | typeof ACT_BARANGAY_FAILURE;
