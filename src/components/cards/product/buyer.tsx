import React from "react";
import { View, Image } from "react-native";
import { Card, Rating } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { BaseText } from "@app/components/base-text";
import { theme } from "@app/styles";

import { BuyerProps } from "./types";
import { styles } from "./styles";

export const BuyerCard: React.FC<BuyerProps> = ({ item }) => {
  return (
    <Card
      containerStyle={{
        height: 270,
        width: 156,
        padding: 0,
        borderRadius: 3,
        shadowOpacity: 0.1,
        shadowOffset: { height: 4, width: 1 },
        shadowColor: theme.colors.black,
      }}
    >
      <View style={styles.wholesaleContainer}>
        <BaseText style={styles.txtWholesale}>Wholesale</BaseText>
      </View>
      <View style={styles.discount}>
        <View style={styles.discountContainer}>
          <BaseText style={styles.txtDiscount}>30%</BaseText>
          <View style={styles.space} />
          <BaseText style={styles.txtDiscount}>OFF</BaseText>
        </View>
        <View style={styles.triangleLeft} />
        <View style={styles.triangleRight} />
      </View>
      <Image
        source={require("../../../../assets/hinata.jpg")}
        style={styles.image}
        resizeMode={"cover"}
      />
      <View style={styles.mainTxtContainer}>
        <BaseText style={styles.txtName} numberOfLines={2}>
          {item.name}
        </BaseText>
        <View style={styles.txtContainer}>
          <BaseText style={styles.txtPrice}>P300</BaseText>
          <BaseText style={styles.txtPrevPrice}>P500</BaseText>
        </View>
        <View style={styles.txtContainer}>
          <View style={{ marginTop: 7 }}>
            <Rating
              type="star"
              ratingCount={5}
              readonly
              imageSize={15}
              startingValue={5}
            />
          </View>
          <BaseText style={styles.txtSold}>50 Sold</BaseText>
        </View>
        <View style={styles.txtContainer}>
          <BaseText style={styles.txtLocation}>Cebu</BaseText>
          <AntDesign name="hearto" style={styles.heart} />
        </View>
      </View>
    </Card>
  );
};
