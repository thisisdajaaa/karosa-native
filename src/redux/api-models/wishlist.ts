import { Audit } from "./common";

export type WishlistProd = {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  orgnlPrice: string;
  dsctdPrice: string;
  rating: number;
  shopId: number;
  stocks: number;
  discount: number;
  heartFlag: boolean;
} & Audit;

export type Response = WishlistProd[];
