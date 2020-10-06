export const ACT_LOGIN_REQUEST = "auth/actLoginRequest" as const;
export const ACT_LOGIN_SUCCESS = "auth/actLoginSuccess" as const;
export const ACT_LOGIN_FAILURE = "auth/actLoginFailure" as const;

export const ACT_FORGOT_PASS_REQUEST = "auth/actForgotPassRequest" as const;
export const ACT_FORGOT_PASS_SUCCESS = "auth/actForgotPassSuccess" as const;
export const ACT_FORGOT_PASS_FAILURE = "auth/actForgotPassFailure" as const;

export type Types =
  | typeof ACT_LOGIN_REQUEST
  | typeof ACT_LOGIN_SUCCESS
  | typeof ACT_LOGIN_FAILURE
  | typeof ACT_FORGOT_PASS_REQUEST
  | typeof ACT_FORGOT_PASS_SUCCESS
  | typeof ACT_FORGOT_PASS_FAILURE;
