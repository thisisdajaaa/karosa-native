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
import { AntDesign } from "@expo/vector-icons";
import ListChevron from "@app/organisms/ListChevron";

import ProductDetailStyles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import Reviews from "@app/molecules/Reviews/";
import { Rating } from "react-native-elements";

import type { PropsType } from "./types";
import ImageOverlay from "@app/components/molecules/ImageOverlay";
import { theme } from "@app/styles";

const ProductDetailTemplate: FC<PropsType> = (props) => {
  const {
    voucherProps,
    variationProps,
    reviewsProps,
    commentProps,
    shippingtProps,
    productDetailsProps,
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={ProductDetailStyles.scrollviewContainer}>
        <ScrollView style={{ flex: 1 }}>
          <View style={ProductDetailStyles.subContainer}>
            <View>
              <Image
                source={{
                  uri: "https://squadstate.com/wp-content/uploads/2020/03/ancient-apparition.jpg",
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
                <Text
                  text={"Mangosteen Product"}
                  textStyle={[ProductDetailStyles.txtBlackRegularBold]}
                />
              </View>
              <View style={ProductDetailStyles.horizontalContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    text={"P40"}
                    textStyle={[
                      ProductDetailStyles.txtBlackRegularBold,
                      ProductDetailStyles.txtGreen,
                    ]}
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    text={"709 Sold"}
                    textStyle={[
                      ProductDetailStyles.txtBlackRegular,
                      ProductDetailStyles.txtSold,
                    ]}
                  />
                </View>
              </View>
              <View style={ProductDetailStyles.horizontalContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Rating
                    type="star"
                    ratingCount={5}
                    readonly
                    imageSize={15}
                    startingValue={5}
                  />
                  <Text
                    text={"5"}
                    textStyle={ProductDetailStyles.txtBlackRegular}
                  />
                  <AntDesign
                    name="hearto"
                    size={20}
                    style={ProductDetailStyles.iconStyle}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={ProductDetailStyles.subContainer}>
            <ListChevron {...shippingtProps} />
          </View>

          <View style={ProductDetailStyles.subContainer}>
            <View style={ProductDetailStyles.detailsContainer}>
              <View style={ProductDetailStyles.horizontalContainer}>
                <Text
                  text={"Product Details"}
                  textStyle={[ProductDetailStyles.txtBlackRegularBold]}
                />
              </View>
            </View>

            {productDetailsProps.map((props, index) => {
              return (
                <ListChevron
                  hasBottomDivider={true}
                  key={index}
                  title={props.title}
                  variation={props.variation}
                  info={props.info}
                  infoStyle={props.infoStyle}
                  chevronColor={props.chevronColor}
                  onPress={props.onPress}
                />
              );
            })}
            <View style={ProductDetailStyles.detailsContainer}>
              <View style={ProductDetailStyles.horizontalContainer}>
                <Text
                  text={
                    "Here’s a sample block of description texts/wordings. Sed ut perspiciatis unde omnis iste natus."
                  }
                  textStyle={[ProductDetailStyles.txtBlackRegular]}
                />
              </View>
            </View>
          </View>

          <View style={ProductDetailStyles.subContainer}>
            <ListChevron hasBottomDivider={true} {...voucherProps} />
          </View>
          <View style={ProductDetailStyles.subContainer}>
            <ListChevron {...variationProps} />
            <View style={ProductDetailStyles.horizontalContainer}>
              <ReviewImages
                imageSources={[
                  {
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  {
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  {
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                  {
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  },
                ]}
              />
            </View>
            <ImageOverlay
              source={{
                uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
              }}
              textContent={"+5"}
            />
          </View>

          {/* <View style={ProductDetailStyles.subContainer}>
            <View style={ProductDetailStyles.horizontalContainer}>
              <View style={ProductDetailStyles.sellerContainer}>
                <View>
                  <Image
                    source={{
                      uri: " https://www.pngarts.com/files/3/Cartoon-Farmer-PNG-Photo.png",
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
          </View> */}

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
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  imageStyle={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  imageStyle={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                  }}
                  imageStyle={ProductDetailStyles.varietyImage}
                />
                <Image
                  source={{
                    uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
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
      {/* <View style={ProductDetailStyles.footer}>
        <View style={ProductDetailStyles.subFooterContainer}>
          <Button {...chatNowButtonProps} />
        </View>
        <View style={ProductDetailStyles.subFooterContainer}>
          <Button {...cartButtonProps} />
        </View>
        <View style={ProductDetailStyles.subFooterContainer}>
          <Button {...buyButtonProps} />
        </View>
      </View> */}
    </View>
  );
};

export default ProductDetailTemplate;
