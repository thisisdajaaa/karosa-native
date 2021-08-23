/**
 *
 * @format
 *
 */
import { PropsType as CommentProps } from "@app/molecules/Reviews/types";
import type { PropsType as ListChevronType } from "@app/organisms/ListChevron/types";

export type PropsType = {
  shippingtProps: ListChevronType;
  commentProps: CommentProps[];
  voucherProps: ListChevronType;
  variationProps: ListChevronType;
  reviewsProps: ListChevronType;
  productDetailsProps: ListChevronType[];
  bottomModalProps: any;
};
