/**
 *
 * @format
 *
 */
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { PropsType as CommentProps } from "@app/molecules/Reviews/types";
import { BaseProps as ListChevronProps } from "@app/components/list/list-chevron/types";

export type PropsType = {
  multiListProps: MultiListProps;
  commentProps: CommentProps[];
  voucherProps: ListChevronProps;
  variationProps: ListChevronProps;
  reviewsProps: ListChevronProps;
};
