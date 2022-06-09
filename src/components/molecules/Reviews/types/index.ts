/**
 *
 * @format
 *
 */

import { ReactNode } from "react";
import { OverlayPropsType } from "@app/organisms/ImageOverlayReviews/types";

export type PropsType = {
  avatarPhoto: string;
  username: string;
  rate: number;
  feedback: string;
  date: string;
  variation: string;
  overlay?: OverlayPropsType[];
  hasBottomDivider?: boolean;
  ratingImage?: ReactNode;
  ratingType?: string;
};
