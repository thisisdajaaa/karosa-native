import { CommonLocation } from "./common";

export type Request = {
  provinceId: number;
};

export type City = CommonLocation & { cityId: number };

export type Response = City[];
