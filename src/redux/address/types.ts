export const SET_NEW_ADDRESS = "address/setNewAddress" as const;
export const SET_USER_COORDINATES = "address/setUserCoordinates" as const;
export const SET_USER_ADDRESS_LIST = "address/setUserAddressList" as const;

export const DELETE_ADDRESS = "address/deleteAddress" as const;

export const ACT_GEOCODER_REQUEST = "address/actGeocoderRequest" as const;
export const ACT_GEOCODER_SUCCESS = "address/actGeocoderSuccess" as const;
export const ACT_GEOCODER_FAILURE = "address/actGeocoderFailure" as const;

export type Types =
  | typeof DELETE_ADDRESS
  | typeof SET_NEW_ADDRESS
  | typeof SET_USER_COORDINATES
  | typeof SET_USER_ADDRESS_LIST
  | typeof ACT_GEOCODER_REQUEST
  | typeof ACT_GEOCODER_SUCCESS
  | typeof ACT_GEOCODER_FAILURE;
