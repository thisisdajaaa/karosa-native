/**
 *
 * @format
 *
 */

export type AuthRegistrationParams = {
  AuthPhoneNumber: {
    identifier: string;
  };
  AuthPassword: {
    identifier: string;
    password: string;
  };
};

export type AuthPhoneNumber = {
  identifier: string;
};

export type AuthPassword = {
  identifier: string;
  password: string;
};
