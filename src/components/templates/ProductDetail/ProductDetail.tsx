/**
 *
 * ProductDetail
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Image from "@app/atoms/Image";
import Text from "@app/atoms/Text";
import ReviewImages from "@app/atoms/ReviewImages";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import ListChevron from "@app/organisms/ListChevron";
import Button from "@app/atoms/Button";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";

import ProductDetailStyles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import Reviews from "@app/molecules/Reviews/";

import type { PropsType } from "./types";

const chatNowButtonProps: ButtonProps = {
  title: "Chat Now",
  titleStyle: [ProductDetailStyles.txtLight, ProductDetailStyles.txtWhite],
  buttonStyle: ProductDetailStyles.button,
  icon: <FontAwesome name="comments-o" size={25} />,
};

const cartButtonProps: ButtonProps = {
  title: "Add to Basket",
  titleStyle: [ProductDetailStyles.txtLight, ProductDetailStyles.txtWhite],
  buttonStyle: ProductDetailStyles.button,
  icon: <AntDesign name="shoppingcart" size={25} />,
};

const buyButtonProps: ButtonProps = {
  title: "Buy Now",
  titleStyle: [ProductDetailStyles.txtLight, ProductDetailStyles.txtWhite],
  buttonStyle: [ProductDetailStyles.button, ProductDetailStyles.orangeBox],
};
const ProductDetailTemplate: FC<PropsType> = (props) => {
  const {
    voucherProps,
    variationProps,
    reviewsProps,
    commentProps,
    shippingtProps,
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
                imageStyle={ProductDetailStyles.productImage}
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
                  <Text
                    text={"Php 40"}
                    textStyle={[
                      ProductDetailStyles.txtBlackRegular,
                      ProductDetailStyles.txtGreen,
                    ]}
                  />
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
                <Text
                  text={"Fresh Tomato"}
                  textStyle={ProductDetailStyles.txtBlackRegular}
                />
              </View>
              <View style={ProductDetailStyles.horizontalContainer}>
                <View style={ProductDetailStyles.rating}>
                  <Text
                    text={"4.1"}
                    textStyle={ProductDetailStyles.txtBlackRegular}
                  />
                </View>
                <Text
                  text={"709 Sold"}
                  textStyle={[
                    ProductDetailStyles.txtBlackRegular,
                    ProductDetailStyles.txtSold,
                  ]}
                />
              </View>
            </View>
          </View>
          <ListChevron hasBottomDivider={true} {...shippingtProps} />
          <ListChevron hasBottomDivider={true} {...voucherProps} />
          <View style={ProductDetailStyles.subContainer}>
            <ListChevron hasBottomDivider={true} {...variationProps} />
            <View style={ProductDetailStyles.horizontalContainer}>
              <ReviewImages
                imageSources={[
                  {
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  {
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  {
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                ]}
              />
            </View>
          </View>
          <View style={ProductDetailStyles.subContainer}>
            <View style={ProductDetailStyles.horizontalContainer}>
              <View style={ProductDetailStyles.sellerContainer}>
                <View>
                  <Image
                    source={{
                      uri:
                        " https://www.pngarts.com/files/3/Cartoon-Farmer-PNG-Photo.png",
                    }}
                    imageStyle={ProductDetailStyles.sellerImage}
                  />
                </View>
                <View style={ProductDetailStyles.txtNameAddress}>
                  <Text
                    text={" Cathy Smith Shop"}
                    textStyle={ProductDetailStyles.txtBlackRegular}
                  />
                  <View>
                    <Text
                      text={"Cebu City"}
                      textStyle={ProductDetailStyles.txtLight}
                    />
                    <AntDesign name="enviromento" size={20} />
                  </View>
                </View>
              </View>
              <Text
                text={"Visit Shop"}
                textStyle={[
                  ProductDetailStyles.txtBlackRegular,
                  ProductDetailStyles.txtGreen,
                ]}
              />
            </View>
            <View
              style={[
                ProductDetailStyles.horizontalContainer,
                ProductDetailStyles.ratingContainer,
              ]}>
              <View style={ProductDetailStyles.reviewSeller}>
                <Text
                  text={"45"}
                  textStyle={ProductDetailStyles.txtSellerInfo}
                />
                <Text
                  text={"Products"}
                  textStyle={ProductDetailStyles.txtLight}
                />
              </View>
              <View style={ProductDetailStyles.reviewSeller}>
                <Text
                  text={"4.7"}
                  textStyle={ProductDetailStyles.txtSellerInfo}
                />
                <Text
                  text={"Rating"}
                  textStyle={ProductDetailStyles.txtLight}
                />
              </View>
              <View style={ProductDetailStyles.reviewSeller}>
                <Text
                  text={"92%"}
                  textStyle={ProductDetailStyles.txtSellerInfo}
                />
                <Text
                  text={"Chat Performance"}
                  textStyle={ProductDetailStyles.txtLight}
                />
              </View>
            </View>
          </View>

          <View style={ProductDetailStyles.subContainer}>
            <View style={ProductDetailStyles.productRatingMain}>
              <View style={ProductDetailStyles.productRatingSub}>
                <Text
                  text={"Product Ratings"}
                  textStyle={ProductDetailStyles.txtBlackRegular}
                />
                <Text
                  text={"51 Reviews"}
                  textStyle={ProductDetailStyles.txtLight}
                />
              </View>
              <ListChevron {...reviewsProps} />
            </View>
            <View style={ProductDetailStyles.buyerGallerySection}>
              <Text
                text={"Buyer Gallery"}
                textStyle={ProductDetailStyles.txtBlackRegular}
              />
              <View style={ProductDetailStyles.buyerGallery}>
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  imageStyle={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  imageStyle={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  imageStyle={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri:
                      "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  imageStyle={ProductDetailStyles.varietyImage}
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
          <Button {...chatNowButtonProps} />
        </View>
        <View style={ProductDetailStyles.subFooterContainer}>
          <Button {...cartButtonProps} />
        </View>
        <View style={ProductDetailStyles.subFooterContainer}>
          <Button {...buyButtonProps} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetailTemplate;
