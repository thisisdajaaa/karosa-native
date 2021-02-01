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
import { ScrollView } from "react-native-gesture-handler";

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

const reviewsProps: ListChevronProps = {
  title: "",
  txtInfo: "See All",
  onPress: () => console.log("variation"),
};

const ProductDetailScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.scrollviewContainer}>
        <ScrollView style={{ flex: 1 }}>
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
                <BaseText style={[styles.txtBlackRegular, styles.txtGreen]}>
                  Php 40
                </BaseText>
                <View style={{ flexDirection: "row" }}>
                  <AntDesign name="hearto" size={20} style={styles.iconStyle} />
                  <AntDesign name="sharealt" size={20} />
                </View>
              </View>
              <BaseText style={styles.txtBlackRegular}>Fresh Tomato</BaseText>
              <View style={styles.horizontalContainer}>
                <View style={styles.rating}>
                  <Image
                    source={require("../../../../assets/star.png")}
                    style={styles.ratingIconStyle}
                  />
                  <BaseText style={styles.txtBlackRegular}>4.1</BaseText>
                </View>
                <BaseText style={[styles.txtBlackRegular, styles.txtSold]}>
                  709 Sold
                </BaseText>
              </View>
            </View>
          </View>
          <MultiList {...multiListProps} />
          <View style={styles.horizontalContainer}>
            <BaseText style={styles.txtBlackRegular}>Cost: Php 50.00</BaseText>
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
                <View style={styles.txtNameAddress}>
                  <BaseText style={styles.txtBlackRegular}>
                    Cathy Smith Shop
                  </BaseText>
                  <View>
                    <BaseText style={styles.txtLight}>
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
              <BaseText style={[styles.txtBlackRegular, styles.txtGreen]}>
                Visit Shop
              </BaseText>
            </View>
            <View style={[styles.horizontalContainer, styles.ratingContainer]}>
              <View style={styles.reviewSeller}>
                <BaseText style={styles.txtSellerInfo}>45</BaseText>
                <BaseText style={styles.txtLight}>Products</BaseText>
              </View>
              <View style={styles.reviewSeller}>
                <BaseText style={styles.txtSellerInfo}>4.7</BaseText>
                <BaseText style={styles.txtLight}>Rating</BaseText>
              </View>
              <View style={styles.reviewSeller}>
                <BaseText style={styles.txtSellerInfo}>92%</BaseText>
                <BaseText style={styles.txtLight}>Chat Performance</BaseText>
              </View>
            </View>
          </View>
          <View style={styles.subContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ justifyContent: "center", marginHorizontal: 8 }}>
                <BaseText style={styles.txtBlackRegular}>
                  Product Ratings
                </BaseText>
                <BaseText style={styles.txtLight}> 51 Reviews</BaseText>
              </View>
              <ListChevron {...reviewsProps} />
            </View>
            <View style={{ marginHorizontal: 8 }}>
              <BaseText style={styles.txtBlackRegular}>Buyer Gallery</BaseText>
              <View style={styles.buyerGallery}>
                <Image
                  source={require("../../../../assets/tom3.jpg")}
                  style={styles.varietyImage}
                />
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
          </View>
          <View style={styles.subContainer}>
            <View style={styles.reviewContainer}>
              <View style={styles.buyerContainer}>
                <Image
                  source={require("../../../../assets/seller.jpg")}
                  style={styles.sellerImage}
                />
                <View style={styles.txtNameAddress}>
                  <BaseText style={styles.txtBlackRegular}>
                    iamgerald19
                  </BaseText>
                  <View>
                    <Image
                      source={require("../../../../assets/stars.png")}
                      style={styles.iconStyle}
                    />
                  </View>
                </View>
              </View>
              <BaseText>
                <AntDesign name="like2" size={20} style={styles.likedIcon} />1
                <AntDesign
                  name="ellipsis1"
                  size={20}
                  style={{ marginLeft: 16 }}
                />
              </BaseText>
            </View>
            <View style={styles.commentContainer}>
              <BaseText style={styles.txtReviewParagraph}>
                This is my first time to Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc sit amet augue ligula. Nunc porttitor dui
                in interdum fermentum.
              </BaseText>
              <View style={styles.tagsContainer}>
                <BaseText customStyles={styles.tagsStyle}>
                  Excellent Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
              </View>
              <View style={styles.buyerGallery}>
                <Image
                  source={require("../../../../assets/tom3.jpg")}
                  style={styles.varietyImage}
                />
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
          </View>
          <View style={styles.subContainer}>
            <View style={styles.reviewContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../../../assets/seller.jpg")}
                  style={styles.sellerImage}
                />
                <View style={styles.txtNameAddress}>
                  <BaseText style={styles.txtBlackRegular}>
                    iamgerald19
                  </BaseText>
                  <View>
                    <Image
                      source={require("../../../../assets/stars.png")}
                      style={styles.iconStyle}
                    />
                  </View>
                </View>
              </View>
              <BaseText>
                <AntDesign name="like2" size={20} style={{ marginLeft: 10 }} />1
                <AntDesign
                  name="ellipsis1"
                  size={20}
                  style={{ marginLeft: 16 }}
                />
              </BaseText>
            </View>
            <View style={styles.commentContainer}>
              <BaseText style={styles.txtReviewParagraph}>
                This is my first time to Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc sit amet augue ligula. Nunc porttitor dui
                in interdum fermentum.
              </BaseText>
              <View style={styles.tagsContainer}>
                <BaseText customStyles={styles.tagsStyle}>
                  Excellent Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
                <BaseText customStyles={styles.tagsStyle}>
                  Good Quality
                </BaseText>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.subFooterContainer}>
          <View style={[styles.button, styles.green]}>
            <FontAwesome name="comments-o" size={25} />
            <BaseText style={[styles.txtLight, styles.txtWhite]}>
              Chat Now
            </BaseText>
          </View>
          <View style={[styles.button, styles.green]}>
            <AntDesign name="shoppingcart" size={25} />
            <BaseText style={[styles.txtLight, styles.txtWhite]}>
              Add to Basket
            </BaseText>
          </View>
          <View style={[styles.button, styles.orangeBox]}>
            <BaseText style={[styles.txtLight, styles.txtWhite]}>
              Buy Now
            </BaseText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
