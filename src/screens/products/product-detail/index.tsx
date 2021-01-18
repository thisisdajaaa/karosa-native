import React from "react";
import { Image, View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { MultiList } from "@app/components/multi-list";
import { ListChevron } from "@app/components/list/list-chevron";
import { BaseProps as ListChevronProps } from "@app/components/list/list-chevron/types";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { Separator } from "@app/components/separator";

import { styles } from "./styles";

const multiListProps: MultiListProps = {
  multiChev: [
    {
      title: "Shipping from Cebu City",
      hasBottomDivider: false,
    },
  ],
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

const ProductDetailScreen: React.FC = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View>
            <Image
              source={require("../../../../assets/kamatis.jpg")}
              style={styles.productImage}
            />
            <AntDesign
              name="ellipsis1"
              size={30}
              style={styles.iconStyleEllipsis}
            />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.horizontalContainer}>
              <BaseText style={styles.txtPrice}>Php 40</BaseText>
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="hearto"
                  size={20}
                  style={styles.iconStyleShare}
                />
                <AntDesign name="sharealt" size={20} />
              </View>
            </View>
            <BaseText style={styles.txtProductName}>Fresh Tomato</BaseText>
            <View style={styles.horizontalContainer}>
              <View style={styles.rating}>
                <Image
                  source={require("../../../../assets/star.png")}
                  style={styles.ratingIconStyle}
                />
                <BaseText style={styles.txtRating}>4.1</BaseText>
              </View>
              <BaseText style={styles.txtSold}>709 Sold</BaseText>
            </View>
          </View>
        </View>
        <MultiList {...multiListProps} />
        <View style={styles.horizontalContainer}>
          <BaseText style={styles.txtProductName}>Cost: Php 50.00</BaseText>
        </View>
        <ListChevron {...voucherProps} />
        <Separator />
        <View style={styles.subContainer}>
          <ListChevron {...variationProps} />
          <View style={styles.rowContainer}>
            <Image
              source={require("../../../../assets/tom1.jpg")}
              style={styles.varietyImage}
            />
            <Image
              source={require("../../../../assets/tom2.jpg")}
              style={styles.varietyImage}
            />
            <Image
              source={require("../../../../assets/tom3.jpg")}
              style={styles.varietyImage}
            />
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.horizontalContainer}>
            <View style={styles.sellerContainer}>
              <View>
                <Image
                  source={require("../../../../assets/seller.jpg")}
                  style={styles.sellerImage}
                />
              </View>
              <View
                style={styles.txtNameAddress}
              >
                <BaseText style={styles.txtProductName}>
                  Cathy Smith Shop
                </BaseText>
                <View>
                  <BaseText style={styles.txtSeller}>
                    <AntDesign
                      name="enviromento"
                      size={20}
                      style={{ marginLeft: 10 }}
                    />
                    Cebu City
                  </BaseText>
                </View>
              </View>
            </View>
            <BaseText style={styles.txtVisitStore}>Visit Shop</BaseText>
          </View>
          <View style={[styles.horizontalContainer, { paddingHorizontal: 16 }]}>
            <View style={styles.reviewSeller}>
              <BaseText style={styles.txtSellerInfo}>45</BaseText>
              <BaseText style={styles.txtSellerLabel}>Products</BaseText>
            </View>
            <View style={styles.reviewSeller}>
              <BaseText style={styles.txtSellerInfo}>4.7</BaseText>
              <BaseText style={styles.txtSellerLabel}>Rating</BaseText>
            </View>
            <View style={styles.reviewSeller}>
              <BaseText style={styles.txtSellerInfo}>92%</BaseText>
              <BaseText style={styles.txtSellerLabel}>
                Chat Performance
              </BaseText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.greenBox}>
          <FontAwesome name="comments-o" size={25} />
          <BaseText style={styles.txtFooters}>Chat Now</BaseText>
        </View>
        <View style={styles.greenBox}>
          <AntDesign name="shoppingcart" size={25} />
          <BaseText style={styles.txtFooters}>Add to Basket</BaseText>
        </View>
        <View style={styles.orangeBox}>
          <BaseText style={styles.txtFooters}>Buy Now</BaseText>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
