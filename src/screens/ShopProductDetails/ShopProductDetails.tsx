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
import { theme } from "@app/styles";

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
  infoStyle: { color: theme.colors.green5 },
  chevronColor: theme.colors.green5,
  onPress: () => console.log("20%"),
};

const productDetailsProps: ListChevronProps[] = [
  {
    title: "Stock",
    variation: COMMON.VARIATION.FOUR,
    info: "50",
    infoStyle: { color: theme.colors.green5 },
    onPress: () => console.log("20%"),
  },
  {
    title: "Category",
    variation: COMMON.VARIATION.FOUR,
    info: "Region's Best",
    infoStyle: { color: theme.colors.green5 },
    onPress: () => console.log("20%"),
  },
  {
    title: "Ships From",
    variation: COMMON.VARIATION.FOUR,
    info: "Cebu Visayas",
    infoStyle: { color: theme.colors.green5 },
    onPress: () => console.log("20%"),
  },
];

const shippingProps: ListChevronProps = {
  title: "Delivery from Cebu City\nP50",
  variation: COMMON.VARIATION.THREE,
  chevronColor: theme.colors.green5,
  iconGroup: "products",
  iconName: "shipping",
  iconHeight: 40,
  iconWidth: 40,
  onPress: () => console.log("pressed"),
};

const variationProps: ListChevronProps = {
  title: "Variations",
  variation: COMMON.VARIATION.ONE,
  chevronColor: theme.colors.green5,
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
      productDetailsProps={productDetailsProps}
    />
  );
};

export default ShopProductDetailsScreen;
