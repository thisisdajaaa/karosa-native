/**
 *
 * ShopProductDetails
 * @format
 *
 */

import React, { FC, useRef, useState } from "react";
import { PropsType as CommentProps } from "@app/molecules/Reviews/types";
import { PropsType as ListChevronProps } from "@app/organisms/ListChevron/types";
import ProductDetailTemplate from "@app/templates/ProductDetail";
import { COMMON } from "src/constants";
import { theme } from "@app/styles";
import BottomSheet from "@app/components/molecules/BottomSheet";
import RBSheet from "react-native-raw-bottom-sheet";
import Header from "@app/components/molecules/Header";
import ProductDetailStyles from "@app/components/templates/ProductDetail/styles";
import { TouchableOpacity, View } from "react-native";
import ImageOverlayReviews from "@app/components/organisms/ImageOverlayReviews";
import { ImageOverlayPropsType } from "@app/components/molecules/ImageOverlay/types";
import Divider from "@app/atoms/Divider";
import FilterButton from "@app/atoms/FilterButton";
import Text from "@app/atoms/Text";
import { Ionicons } from "@expo/vector-icons";
import { contentPropsType } from "@app/components/organisms/ImageOverlayReviews/types";

const ShopProductDetailsScreen: FC = () => {
  const initialStocks = 50;
  const variationRef = useRef<RBSheet>(null);
  const [stocks, setStocks] = useState(initialStocks);
  const [variation1, setVariation1] = useState(0);
  const [variation2, setVariation2] = useState(0);

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

  const firstVariation = [
    {
      id: 1,
      title: "Variant One",
      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
    },
    {
      id: 2,
      title: "Variant Two",
      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
    },
    {
      id: 3,
      title: "Variant Three",
      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
    },
  ];

  const secondVariation = [
    { id: 1, title: "2 kgms" },
    { id: 2, title: "10 kgms" },
    { id: 3, title: "5 kgms" },
    { id: 4, title: "6 kgms" },
    { id: 5, title: "8 kgms" },
  ];

  // //set variation2 chosen
  // const variation2Picker = useCallback((id) => {
  //   setVariation2(id);
  //   console.log("id " + id + " choosen for variation 2");
  // }, []);

  //switches choices from one variation to another
  const switchVariation1 = (id: number, variation: number) => {
    id == variation ? setVariation1(0) : setVariation1(id);
  };

  const switchVariation2 = (id: number, variation: number) => {
    id == variation ? setVariation2(0) : setVariation2(id);
  };

  let firstVariantMap: contentPropsType[] = [];

  firstVariation.map((props) => {
    firstVariantMap.push({
      source: {
        uri: props.uri,
      },
      textContent: props.title,
      viewTextStyle: imageOverlayProps.viewTextStyle,
      textStyle: imageOverlayProps.textStyle,
      imageWidth: imageOverlayProps.imageWidth,
      imageHeight: imageOverlayProps.imageHeight,
      mainContainerStyle:
        props.id == variation1
          ? {
              borderWidth: 3,
              borderColor: theme.colors.green5,
              borderRadius: 3,
            }
          : {},
      onPress: () => [switchVariation1(props.id, variation1)],
    });
  });

  return (
    <>
      <ProductDetailTemplate
        shippingtProps={shippingProps}
        voucherProps={voucherProps}
        commentProps={[rev1Props, rev2Props]}
        variationProps={variationProps}
        reviewsProps={reviewsProps}
        productDetailsProps={productDetailsProps}
      />
      <BottomSheet ref={variationRef} height={1000}>
        <Header
          centerComponent={{
            text: "Select Variant",
            style: ProductDetailStyles.modalTitle,
          }}
        />
        <View style={ProductDetailStyles.horizontalContainer}>
          <ImageOverlayReviews overlayProps={firstVariantMap} />
        </View>
        <Divider
          style={{
            marginTop: 20,
            marginBottom: 10,
            alignContent: "center",
            marginLeft: 15,
            marginRight: 15,
          }}
        />
        <View style={ProductDetailStyles.btnGrpViewContainer}>
          {secondVariation.map((props) => {
            return (
              <View style={ProductDetailStyles.btnContainer}>
                <FilterButton
                  title={props.title}
                  onPress={() => [switchVariation2(props.id, variation2)]}
                  key={props.id}
                  buttonStyle={
                    props.id == variation2
                      ? { backgroundColor: theme.colors.green5 }
                      : {}
                  }
                />
              </View>
            );
          })}
        </View>

        <Divider
          style={{
            marginTop: 10,
            marginBottom: 10,
            alignContent: "center",
            marginLeft: 15,
            marginRight: 15,
          }}
        />

        <View style={ProductDetailStyles.horizontalContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text
              text={"Quantity"}
              textStyle={[ProductDetailStyles.txtBlackRegularBold]}
            />
            <View style={{ padding: 10 }} />
            <Text
              text={stocks + " Pcs left"}
              textStyle={[ProductDetailStyles.txtMuted, { marginRight: 30 }]}
            />

            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.light10,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 8,
              }}
              onPress={() => setStocks(stocks > 0 ? stocks - 1 : stocks)}>
              <Ionicons name="remove" size={30} color={theme.colors.dark10} />
            </TouchableOpacity>

            <Text
              text={stocks.toString()}
              textStyle={[
                ProductDetailStyles.txtBlackRegularBold,
                {
                  marginRight: 20,
                  marginLeft: 20,
                  alignContent: "center",
                  top: 10,
                  fontSize: 20,
                },
              ]}
            />

            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.green5,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 8,
              }}
              onPress={() =>
                setStocks(stocks < initialStocks ? stocks + 1 : initialStocks)
              }>
              <Ionicons name="add" size={30} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default ShopProductDetailsScreen;
