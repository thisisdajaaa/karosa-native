/**
 *
 * ShopProductDetails
 * @format
 *
 */

import React, { FC } from "react";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { PropsType as CommentProps } from "@app/molecules/Reviews/types";
import { BaseProps as ListChevronProps } from "@app/components/list/list-chevron/types";
import ProductDetailTemplate from "@app/templates/ProductDetail";

const multiListProps: MultiListProps = {
  multiChev: [
    {
      title: "Shipping from Cebu City",
      hasBottomDivider: false,
    },
  ],
};

const rev1Props: CommentProps = {
  avatarPhoto:
    "http://2.bp.blogspot.com/-wvCP_ff54N4/Ukpp0EjfInI/AAAAAAAAAYI/QR4VOlfCLfg/s1600/index.jpg",
  username: "gwapo123",
  comments: "nice nice nice well played",
  likes: 200,
  tags: ["nice", "good!"],
  rate: 4,
};

const rev2Props: CommentProps = {
  avatarPhoto:
    "http://2.bp.blogspot.com/-wvCP_ff54N4/Ukpp0EjfInI/AAAAAAAAAYI/QR4VOlfCLfg/s1600/index.jpg",
  username: "ValorantNoob213",
  comments: "spike planted! lorem ipsusm dolo set amet groove street home ",
  likes: 200,
  tags: ["nice", "scatter!", "wonderful"],
  rate: 2,
};
const voucherProps: ListChevronProps = {
  title: "Shop Vouchers",
  txtInfo: "20% OFF",
  onPress: () => console.log("20%"),
};

const variationProps: ListChevronProps = {
  title: "Select Variation",
  onPress: () => console.log("variation"),
};

const reviewsProps: ListChevronProps = {
  title: "",
  txtInfo: "See All",
  onPress: () => console.log("variation"),
};

const ShopProductDetails: FC = () => {
  return (
    <ProductDetailTemplate
      multiListProps={multiListProps}
      voucherProps={voucherProps}
      commentProps={[rev1Props, rev2Props]}
      variationProps={variationProps}
      reviewsProps={reviewsProps}
    />
  );
};

export default ShopProductDetails;
