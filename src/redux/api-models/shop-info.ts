import { ENUM } from "@app/constants";

import { Audit } from "./common";

export type Shop = {
  id: number;
  name: string;
  isActive: boolean;
  status: ENUM.Shop_Status | null;
} & Audit;

export type Response = {
  username: string;
  email: string;
  shop: Shop;
};
