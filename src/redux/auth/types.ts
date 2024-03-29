export const SET_AUTH_BACK = "auth/setAuthBack" as const;
export const SET_AUTH_OPEN = "auth/setAuthOpen" as const;
export const SET_OAUTH = "auth/setOAuth" as const;

export const ACT_LOGIN_REQUEST = "auth/actLoginRequest" as const;
export const ACT_LOGIN_SUCCESS = "auth/actLoginSuccess" as const;
export const ACT_LOGIN_FAILURE = "auth/actLoginFailure" as const;

export const ACT_FORGOT_PASS_REQUEST = "auth/actForgotPassRequest" as const;
export const ACT_FORGOT_PASS_SUCCESS = "auth/actForgotPassSuccess" as const;
export const ACT_FORGOT_PASS_FAILURE = "auth/actForgotPassFailure" as const;

export const ACT_REGISTER_REQUEST = "auth/actRegisterRequest" as const;
export const ACT_REGISTER_SUCCESS = "auth/actRegisterSuccess" as const;
export const ACT_REGISTER_FAILURE = "auth/actRegisterFailure" as const;

export type Types =
  | typeof SET_AUTH_BACK
  | typeof SET_AUTH_OPEN
  | typeof SET_OAUTH
  | typeof ACT_LOGIN_REQUEST
  | typeof ACT_LOGIN_SUCCESS
  | typeof ACT_LOGIN_FAILURE
  | typeof ACT_FORGOT_PASS_REQUEST
  | typeof ACT_FORGOT_PASS_SUCCESS
  | typeof ACT_FORGOT_PASS_FAILURE
  | typeof ACT_REGISTER_REQUEST
  | typeof ACT_REGISTER_SUCCESS
  | typeof ACT_REGISTER_FAILURE;
