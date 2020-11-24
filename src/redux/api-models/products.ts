export type Products = {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  shopId: number;
  createdAt: string;
  updatedAt: string;
};

export type Response = Products[];
