import { Audit } from "./common";

export type Products = {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  shopId: number;
} & Audit;

export type Response = Products[];
