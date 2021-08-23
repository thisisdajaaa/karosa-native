/**
 *
 * ShopProductDetails
 * @format
 *
 */

import React, { FC, useRef } from "react";
import { PropsType as CommentProps } from "@app/molecules/Reviews/types";
import { PropsType as ListChevronProps } from "@app/organisms/ListChevron/types";
import ProductDetailTemplate from "@app/templates/ProductDetail";
import { COMMON } from "src/constants";
import { theme } from "@app/styles";
import BottomSheet from "@app/components/molecules/BottomSheet";
import RBSheet from "react-native-raw-bottom-sheet";
import Header from "@app/components/molecules/Header";
import ProductDetailStyles from "@app/components/templates/ProductDetail/styles";
import { View } from "react-native";
import ImageOverlayReviews from "@app/components/organisms/ImageOverlayReviews";
import { ImageOverlayPropsType } from "@app/components/molecules/ImageOverlay/types";

const ShopProductDetailsScreen: FC = () => {
  const variationRef = useRef<RBSheet>(null);

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
    onPress: () => variationRef.current?.open(),
  };

  const reviewsProps: ListChevronProps = {
    title: "",
    variation: COMMON.VARIATION.ONE,
    info: "See All",
    onPress: () => console.log("variation"),
  };

  const imageOverlayProps: ImageOverlayPropsType = {
    source: {
      uri: "",
    },
    viewTextStyle: {
      justifyContent: "flex-end",
      left: 0,
      height: 60,
      top: 50,
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 20,
    },
    textStyle: { fontSize: 12, fontWeight: "bold" },
    imageHeight: 100,
    imageWidth: 120,
  };

  return (
    <ProductDetailTemplate
      shippingtProps={shippingProps}
      voucherProps={voucherProps}
      commentProps={[rev1Props, rev2Props]}
      variationProps={variationProps}
      reviewsProps={reviewsProps}
      productDetailsProps={productDetailsProps}
      bottomModalProps={
        <BottomSheet ref={variationRef} height={600}>
          <Header
            centerComponent={{
              text: "Select Variant",
              style: ProductDetailStyles.modalTitle,
            }}
          />
          <View style={ProductDetailStyles.horizontalContainer}>
            <ImageOverlayReviews
              overlayProps={[
                {
                  source: {
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  textContent: "Variant One",
                  viewTextStyle: imageOverlayProps.viewTextStyle,
                  textStyle: imageOverlayProps.textStyle,
                  imageWidth: imageOverlayProps.imageWidth,
                  imageHeight: imageOverlayProps.imageHeight,
                },
                {
                  source: {
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  textContent: "Variant Two",
                  viewTextStyle: imageOverlayProps.viewTextStyle,
                  textStyle: imageOverlayProps.textStyle,
                  imageWidth: imageOverlayProps.imageWidth,
                  imageHeight: imageOverlayProps.imageHeight,
                },
                {
                  source: {
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  textContent: "Variant Three",
                  viewTextStyle: imageOverlayProps.viewTextStyle,
                  textStyle: imageOverlayProps.textStyle,
                  imageWidth: imageOverlayProps.imageWidth,
                  imageHeight: imageOverlayProps.imageHeight,
                },
              ]}
            />
          </View>
        </BottomSheet>
      }
    />
  );
};

export default ShopProductDetailsScreen;
