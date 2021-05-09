/**
 *
 * @format
 *
 */

export type PropsType = {
  onCoupon?(): void;
  onClaim?(): void;
  discountPrice: string;
  minSpendPrice: string;
  validDate: string;
};
