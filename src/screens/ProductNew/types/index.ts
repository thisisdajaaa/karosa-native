/**
 *
 * @format
 *
 */

export type ProductNewNavigation = {
  onBack(): void;
  onCategory(): void;
  onShipping(): void;
  onWholesale(): void;
  onVariation(): void;
};

export type ProductNewSheetRefs = {
  status(): void;
  availability(): void;
  measurement(): void;
};
