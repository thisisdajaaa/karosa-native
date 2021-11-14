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
  estimatedAvailableDate: string;
  bestBefore: string;
  productStatus: number;
  description: string;
  variationOptions: VariationOption[];
  variations: Variation[];
};
