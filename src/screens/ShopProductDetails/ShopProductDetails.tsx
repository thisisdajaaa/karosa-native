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
import { ScrollView, TouchableOpacity, View } from "react-native";
import ImageOverlayReviews from "@app/components/organisms/ImageOverlayReviews";
import { ImageOverlayPropsType } from "@app/components/molecules/ImageOverlay/types";
import FilterButton from "@app/atoms/FilterButton";
import Text from "@app/atoms/Text";
import { Ionicons } from "@expo/vector-icons";
import { contentPropsType } from "@app/components/organisms/ImageOverlayReviews/types";
import { ListItem } from "react-native-elements";
import ImageOverlay from "@app/components/molecules/ImageOverlay";
import Button from "@app/atoms/Button";

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
      height: "33%",
      bottom: 0,
    },
    textStyle: { fontSize: 12, fontWeight: "bold" },
    imageHeight: 78,
    imageWidth: 90,
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
    // { id: 4, title: "6 kgms" },
    // { id: 5, title: "8 kgms" },
  ];

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
      viewTextStyle: [imageOverlayProps.viewTextStyle],
      textStyle: imageOverlayProps.textStyle,
      imageHeight: imageOverlayProps.imageHeight,
      imageWidth: imageOverlayProps.imageWidth,
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

        <ScrollView style={{ flex: 1 }}>
          <ListItem bottomDivider={true} style={{ flex: 1 }}>
            <ImageOverlayReviews overlayProps={firstVariantMap} />
          </ListItem>

          <ListItem bottomDivider={true}>
            {secondVariation.map((props) => {
              return (
                // <View style={ProductDetailStyles.btnContainer}>
                <FilterButton
                  title={props.title}
                  onPress={() => [switchVariation2(props.id, variation2)]}
                  key={props.id}
                  buttonStyle={
                    props.id == variation2
                      ? [
                          {
                            borderColor: theme.colors.green5,
                            borderWidth: 2,
                            paddingLeft: 20,
                            paddingRight: 20,
                          },
                        ]
                      : {
                          borderColor: theme.colors.black,
                          borderWidth: 2,
                          paddingLeft: 20,
                          paddingRight: 20,
                        }
                  }
                  containerStyle={{ margin: 0 }}
                  titleStyle={
                    props.id == variation2
                      ? [{ fontSize: 12, color: theme.colors.green5 }]
                      : { fontSize: 12, color: theme.colors.black }
                  }
                />
                // </View>
              );
            })}
          </ListItem>

          {variation1 != 0 && variation2 != 0 ? (
            <>
              <View>
                <ListItem bottomDivider={false}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      text={"Quantity"}
                      textStyle={[ProductDetailStyles.txtBlackRegularBold]}
                    />
                    <View style={{ padding: 10 }} />
                    <Text
                      text={stocks + " Pcs left"}
                      textStyle={[
                        ProductDetailStyles.txtMuted,
                        { marginRight: 30 },
                      ]}
                    />

                    <TouchableOpacity
                      style={{
                        backgroundColor: theme.colors.light10,
                        paddingLeft: 5,
                        paddingRight: 5,
                        borderRadius: 8,
                      }}
                      onPress={() =>
                        setStocks(stocks > 0 ? stocks - 1 : stocks)
                      }>
                      <Ionicons
                        name="remove"
                        size={30}
                        color={theme.colors.dark10}
                      />
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
                        setStocks(
                          stocks < initialStocks ? stocks + 1 : initialStocks
                        )
                      }>
                      <Ionicons
                        name="add"
                        size={30}
                        color={theme.colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </ListItem>

                <ListItem bottomDivider={false}>
                  <ImageOverlay
                    imageHeight={109}
                    imageWidth={122}
                    hasOverlay={false}
                    source={{
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    }}
                  />
                  <View style={{ bottom: 28 }}>
                    <Text
                      text={"P500"}
                      textStyle={[
                        ProductDetailStyles.txtBlackRegularBold,
                        ProductDetailStyles.txtGreen,
                      ]}
                    />
                    <Text
                      text={"P800"}
                      textStyle={[
                        ProductDetailStyles.txtMuted,
                        {
                          textDecorationLine: "line-through",
                          textDecorationStyle: "double",
                        },
                      ]}
                    />

                    <Text
                      text={
                        firstVariation[variation1 - 1].title +
                        ", " +
                        secondVariation[variation2 - 1].title
                      }
                      textStyle={[ProductDetailStyles.txtBlackRegular]}
                    />
                  </View>
                </ListItem>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center",
                    // margin: 10,
                    // paddingTop: 20,
                    bottom: 0,
                  }}>
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                      justifyContent: "center",
                    }}>
                    <Button
                      title="Add to Basket"
                      titleStyle={{
                        color: theme.colors.black,
                        textAlign: "center",
                      }}
                      buttonStyle={{
                        backgroundColor: theme.colors.light10,
                        paddingRight: 40,
                        paddingLeft: 40,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                      justifyContent: "center",
                    }}>
                    <Button
                      title="Buy Now"
                      titleStyle={{
                        textAlign: "center",
                      }}
                      buttonStyle={{
                        paddingRight: 50,
                        paddingLeft: 50,
                      }}
                    />
                  </View>
                </View>
              </View>
            </>
          ) : (
            <></>
          )}
        </ScrollView>
      </BottomSheet>
    </>
  );
};

export default ShopProductDetailsScreen;
