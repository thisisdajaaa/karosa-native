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
} & Audit;

export type Response = WishlistProd[];
