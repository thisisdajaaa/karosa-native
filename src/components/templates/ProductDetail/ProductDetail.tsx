/**
 *
 * ProductDetail
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import Image from "@app/atoms/Image";
import Text from "@app/atoms/Text";

import { AntDesign } from "@expo/vector-icons";
import ListChevron from "@app/organisms/ListChevron";

import ProductDetailStyles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import Reviews from "@app/molecules/Reviews/";
import { ListItem, Rating } from "react-native-elements";

import type { PropsType } from "./types";
import ImageOverlayReviews from "@app/components/organisms/ImageOverlayReviews";
import ListChevronStyles from "@app/components/organisms/ListChevron/styles";
import Icon from "@app/atoms/Icon";
import Button from "@app/atoms/Button";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";
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

  const chatNowButtonProps: ButtonProps = {
    title: "",
    type: "clear",
    titleStyle: [
      ProductDetailStyles.txtLight,
      {
        color: theme.colors.grey10,
      },
    ],
    buttonStyle: [
      {
        backgroundColor: theme.colors.white,
      },
    ],
    icon: (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Icon group="products" name="chatNow" width={20} height={20} />
        <Text text="Chat" textStyle={{ fontSize: 12 }} />
      </View>
    ),
  };

  return (
    <View style={ProductDetailStyles.flexView}>
      <View style={ProductDetailStyles.scrollviewContainer}>
        <ScrollView style={ProductDetailStyles.flexView}>
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
              <ListItem bottomDivider={false}>
                <Rating
                  type="star"
                  ratingCount={5}
                  readonly
                  imageSize={20}
                  startingValue={5}
                  style={{ paddingBottom: 5 }}
                />
                <ListItem.Content>
                  <ListItem.Title style={ListChevronStyles.txtSubtitle}>
                    <Text
                      text={"5"}
                      textStyle={ProductDetailStyles.txtBlackRegular}
                    />
                  </ListItem.Title>
                </ListItem.Content>
                <Icon
                  group="common"
                  name={"outlineHeart"}
                  height={20}
                  width={20}
                />
              </ListItem>
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
              <ImageOverlayReviews
                overlayProps={[
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    hasOverlay: false,
                  },
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    hasOverlay: false,
                  },
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    hasOverlay: false,
                  },
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    textContent: "+5",
                  },
                ]}
              />
            </View>

            <View style={ProductDetailStyles.horizontalContainer}>
              <ImageOverlayReviews
                overlayProps={[
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    hasOverlay: false,
                  },
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    hasOverlay: false,
                  },
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    hasOverlay: false,
                  },
                  {
                    source: {
                      uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
                    },
                    textContent: "+5",
                  },
                ]}
              />
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
      <View style={ProductDetailStyles.footer}>
        <TouchableOpacity style={ProductDetailStyles.subFooterChat}>
          <View>
            <Button {...chatNowButtonProps} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={ProductDetailStyles.subFooterCart}>
          <Text
            text="Add to Basket"
            textStyle={[
              ProductDetailStyles.txtLight,
              { color: theme.colors.black, fontSize: 12 },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={ProductDetailStyles.subFooterBuy}>
          <Text
            text="Buy Now"
            textStyle={[
              { fontSize: 12 },
              ProductDetailStyles.txtLight,
              ProductDetailStyles.txtWhite,
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailTemplate;
