import { RES_GENDER } from "@app/constants";

export type Avatar = {
  photoUrl?: string;
  publicId?: string;
};

export type Request = {
  identifier: string;
  password: string;
};

export type Response = {
  id?: string;
  username?: string;
  fullName?: string;
  phoneNo?: string;
  email?: string;
  gender?: RES_GENDER;
  avatar?: Avatar;
  shop?: any;
};
