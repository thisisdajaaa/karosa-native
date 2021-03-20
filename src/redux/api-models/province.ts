import { CommonLocation } from "./common";

export type Request = {
  regionId: number;
};

export type Province = CommonLocation & { regionId: number };

export type Response = Province[];
