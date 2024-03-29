/**
 *
 * @format
 *
 */

export type PropsType = {
  image: string;
  productName: string;
  hasBottomDivider?: boolean;
  price: string;
  wholesale?: boolean;
  discount?: string;
  stock: number;
  sold: number;
  likes: number;
  rating: number;
  onDiscontinue(): void;
  onEdit(): void;
  onBoost(): void;
};
