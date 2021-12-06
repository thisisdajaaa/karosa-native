export type VariationOption = {
  name: string;
  options: string[];
};

export type Variation = {
  name: string;
  option: string;
  price: number;
  stock: number;
  weight: number;
};

export type Request = {
  name: string;
  categoryId: number;
  upComingHarvest: boolean;
  estimatedAvailableDate: string | null;
  bestBefore: string | null;
  productStatus: string | null;
  description: string | null;
  availability: string[] | null;
  variationOptions: VariationOption[] | null;
  variations: Variation[] | null;
};

export type Response = { status: number };
