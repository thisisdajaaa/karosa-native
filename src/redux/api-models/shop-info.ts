import { ShopStatus } from "@app/constants";

import { Audit } from "./common";

export type Shop = {
  id: number;
  name: string;
  isActive: boolean;
  status: ShopStatus | null;
} & Audit;

export type Response = {
  username: string;
  email: string;
  shop: Shop;
};
