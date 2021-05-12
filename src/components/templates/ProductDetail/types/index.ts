/**
 *
 * @format
 *
 */
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { PropsType as CommentProps } from "@app/molecules/Reviews/types";
import type { PropsType as ListChevronType } from "@app/organisms/ListChevron/types";


export type PropsType = {
  multiListProps: MultiListProps;
  commentProps: CommentProps[];
  voucherProps: ListChevronType;
  variationProps: ListChevronType;
  reviewsProps: ListChevronType;
};
