import { RES_SHOP_STATUS } from "@app/constants";

import { Audit } from "./common";

export type Shop = {
  id: number;
  name: string;
  isActive: boolean;
  status: RES_SHOP_STATUS | null;
} & Audit;

export type Response = {
  username: string;
  email: string;
  shop: Shop;
};
