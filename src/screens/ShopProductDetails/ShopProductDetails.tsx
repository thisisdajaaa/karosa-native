/**
 *
 * ShopProductDetails
 * @format
 *
 */

import React, { FC } from "react";
import { PropsType as CommentProps } from "@app/molecules/Reviews/types";
import { PropsType as ListChevronProps } from "@app/organisms/ListChevron/types";
import ProductDetailTemplate from "@app/templates/ProductDetail";
import { COMMON } from "src/constants";

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
  variation: COMMON.VARIATION.ONE,
  info: "20% OFF",
  onPress: () => console.log("20%"),
};

const shippingProps: ListChevronProps = {
  title: "Shipping from Cebu City\nShipping Cost: P50",
  variation: COMMON.VARIATION.ONE,
  onPress: () => console.log("pressed"),
};

const variationProps: ListChevronProps = {
  title: "Select Variation",
  variation: COMMON.VARIATION.ONE,
  onPress: () => console.log("variation"),
};

const reviewsProps: ListChevronProps = {
  title: "",
  variation: COMMON.VARIATION.ONE,
  info: "See All",
  onPress: () => console.log("variation"),
};

const ShopProductDetailsScreen: FC = () => {
  return (
    <ProductDetailTemplate
      shippingtProps={shippingProps}
      voucherProps={voucherProps}
      commentProps={[rev1Props, rev2Props]}
      variationProps={variationProps}
      reviewsProps={reviewsProps}
    />
  );
};

export default ShopProductDetailsScreen;
