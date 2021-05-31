/**
 *
 * @format
 *
 */

export type AuthRegistrationParams = {
  AuthPhoneNumber: {
    identifier: string;
  };
  AuthVerification: {
    otp: string;
    identifier: string;
  };
};
