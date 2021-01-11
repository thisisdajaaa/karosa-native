import { ENUM } from "@app/constants";

import { Audit } from "./common";

export type Shop = {
  id: number;
  name: string;
  isActive: boolean;
  status: ENUM.RES_SHOP_STATUS | null;
} & Audit;

export type Response = {
  username: string;
  email: string;
  shop: Shop;
};
