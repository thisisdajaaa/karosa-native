export type Request = {
  name: string;
  categoryId: number;
  description: string;
};

export type Response = {
  id: number;
  shopId: number;
  categoryId: number;
  name: string;
  description: string;
};
