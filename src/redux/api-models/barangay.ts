import { CommonLocation } from "./common";

export type Request = {
  cityId: number;
};

export type Barangay = CommonLocation & { provinceId: number };

export type Response = Barangay[];
