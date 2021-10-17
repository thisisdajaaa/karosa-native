/**
 *
 * @format
 *
 */

import { Dispatch, SetStateAction } from "react";

export type PropsType = {
  onBack(): void;
};

export type VariationModalProps = {
  index: number;
  variationId: string;
  visible: boolean;
  toggleOverlay(): void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export type NewVariationProps = {
  index: number;
};
