import { Audit } from "./common";

export type Categories = {
  id: number;
  name: string;
  description: string;
} & Audit;

export type Response = Categories[];
