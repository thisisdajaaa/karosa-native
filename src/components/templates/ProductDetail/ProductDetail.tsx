/**
 *
 * ProductDetail
 * @format
 *
 */

import React, { FC } from "react";
import { Image, View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { MultiList } from "@app/components/multi-list";
import { ListChevron } from "@app/components/list/list-chevron";
import { Separator } from "@app/components/separator";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";

import ProductDetailStyles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import Reviews from "@app/molecules/Reviews/";

import type { PropsType } from "./types";

const chatNowButtonProps: ButtonProps = {
  title: "Chat Now",
  textStyle: [ProductDetailStyles.txtLight, ProductDetailStyles.txtWhite],
  containerStyle: ProductDetailStyles.button,
  icon: { left: <FontAwesome name="comments-o" size={25} /> },
};

const cartButtonProps: ButtonProps = {
  title: "Add to Basket",
  textStyle: [ProductDetailStyles.txtLight, ProductDetailStyles.txtWhite],
  containerStyle: ProductDetailStyles.button,
  icon: { left: <AntDesign name="shoppingcart" size={25} /> },
};

const buyButtonProps: ButtonProps = {
  title: "Buy Now",
  textStyle: [ProductDetailStyles.txtLight, ProductDetailStyles.txtWhite],
  containerStyle: [ProductDetailStyles.button, ProductDetailStyles.orangeBox],
};
const ProductDetail: FC<PropsType> = (props) => {
  const {
    multiListProps,
    voucherProps,
    variationProps,
    reviewsProps,
    commentProps,
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={ProductDetailStyles.scrollviewContainer}>
        <ScrollView style={{ flex: 1 }}>
          <View style={ProductDetailStyles.subContainer}>
            <View>
              <Image
                source={{
                  uri:
                    "https://squadstate.com/wp-content/uploads/2020/03/ancient-apparition.jpg",
                }}
                style={ProductDetailStyles.productImage}
              />
              <AntDesign
                name="ellipsis1"
                size={30}
                style={ProductDetailStyles.iconStyleEllipsis}
              />
            </View>
            <View style={ProductDetailStyles.detailsContainer}>
              <View style={ProductDetailStyles.horizontalContainer}>
                <View>
                  <BaseText
                    style={[
                      ProductDetailStyles.txtBlackRegular,
                      ProductDetailStyles.txtGreen,
                    ]}>
                    Php 40
                  </BaseText>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <AntDesign
                    name="hearto"
                    size={20}
                    style={ProductDetailStyles.iconStyle}
                  />
                  <AntDesign
                    name="sharealt"
                    size={20}
                    style={{ marginHorizontal: 8 }}
                  />
                </View>
              </View>
              <View style={ProductDetailStyles.horizontalContainer}>
                <BaseText style={ProductDetailStyles.txtBlackRegular}>
                  Fresh Tomato
                </BaseText>
              </View>
              <View style={ProductDetailStyles.horizontalContainer}>
                <View style={ProductDetailStyles.rating}>
                  {/* <Image
                    source={require("../../../../assets/star.png")}
                    style={ProductDetailStyles.ratingIconStyle}
                  /> */}
                  <BaseText style={ProductDetailStyles.txtBlackRegular}>
                    4.1
                  </BaseText>
                </View>
                <BaseText
                  style={[
                    ProductDetailStyles.txtBlackRegular,
                    ProductDetailStyles.txtSold,
                  ]}>
                  709 Sold
                </BaseText>
              </View>
            </View>
          </View>
          <MultiList {...multiListProps} />
          <View style={ProductDetailStyles.horizontalContainer}>
            <BaseText style={ProductDetailStyles.txtBlackRegular}>
              Cost: Php 50.00
            </BaseText>
          </View>
          <ListChevron {...voucherProps} />
          <Separator />
          <View style={ProductDetailStyles.subContainer}>
            <ListChevron {...variationProps} />
            <View style={ProductDetailStyles.horizontalContainer}>
              {/* <ReviewImages
                imageSources={[
                  require("../../../../assets/tom2.jpg"),
                  require("../../../../assets/tom1.jpg"),
                  require("../../../../assets/tom3.jpg"),
                ]}
              /> */}
            </View>
          </View>
          <View style={ProductDetailStyles.subContainer}>
            <View style={ProductDetailStyles.horizontalContainer}>
              <View style={ProductDetailStyles.sellerContainer}>
                <View>
                  {/* <Image
                    source={require("../../../../assets/seller.jpg")}
                    style={ProductDetailStyles.sellerImage}
                  /> */}
                </View>
                <View style={ProductDetailStyles.txtNameAddress}>
                  <BaseText style={ProductDetailStyles.txtBlackRegular}>
                    Cathy Smith Shop
                  </BaseText>
                  <View>
                    <BaseText style={ProductDetailStyles.txtLight}>
                      <AntDesign name="enviromento" size={20} />
                      Cebu City
                    </BaseText>
                  </View>
                </View>
              </View>
              <BaseText
                style={[
                  ProductDetailStyles.txtBlackRegular,
                  ProductDetailStyles.txtGreen,
                ]}>
                Visit Shop
              </BaseText>
            </View>
            <View
              style={[
                ProductDetailStyles.horizontalContainer,
                ProductDetailStyles.ratingContainer,
              ]}>
              <View style={ProductDetailStyles.reviewSeller}>
                <BaseText style={ProductDetailStyles.txtSellerInfo}>
                  45
                </BaseText>
                <BaseText style={ProductDetailStyles.txtLight}>
                  Products
                </BaseText>
              </View>
              <View style={ProductDetailStyles.reviewSeller}>
                <BaseText style={ProductDetailStyles.txtSellerInfo}>
                  4.7
                </BaseText>
                <BaseText style={ProductDetailStyles.txtLight}>Rating</BaseText>
              </View>
              <View style={ProductDetailStyles.reviewSeller}>
                <BaseText style={ProductDetailStyles.txtSellerInfo}>
                  92%
                </BaseText>
                <BaseText style={ProductDetailStyles.txtLight}>
                  Chat Performance
                </BaseText>
              </View>
            </View>
          </View>

          <View style={ProductDetailStyles.subContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ justifyContent: "center", marginHorizontal: 8 }}>
                <BaseText style={ProductDetailStyles.txtBlackRegular}>
                  Product Ratings
                </BaseText>
                <BaseText style={ProductDetailStyles.txtLight}>
                  {" "}
                  51 Reviews
                </BaseText>
              </View>
              <ListChevron {...reviewsProps} />
            </View>
            <View style={{ marginHorizontal: 8 }}>
              <BaseText style={ProductDetailStyles.txtBlackRegular}>
                Buyer Gallery
              </BaseText>
              <View style={ProductDetailStyles.buyerGallery}>
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  style={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  style={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  style={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  style={ProductDetailStyles.varietyImage}
                />
              </View>
            </View>
            {commentProps.map((comment, index) => {
              return <Reviews key={index} {...comment} />;
            })}
          </View>
        </ScrollView>
      </View>
      <View style={ProductDetailStyles.footer}>
        <View style={ProductDetailStyles.subFooterContainer}>
          <AppButton {...chatNowButtonProps} />
          <AppButton {...cartButtonProps} />
          <AppButton {...buyButtonProps} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
