import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-elements";
import { BaseText } from "@app/components/base-text";
import { theme } from "@app/styles";

import { Props } from "./types";
import { styles } from "./styles";

export const ProductCard: React.FC<Props> = ({ item, ActionButton }) => {
  return (
    <Card
      containerStyle={{
        height: 263,
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
      <View style={styles.txtContainerOne}>
        <BaseText style={styles.txtName}>{item.name}</BaseText>
        <View style={styles.txtContainerTwo}>
          <BaseText style={styles.txtPrice}>P300</BaseText>
          <BaseText style={styles.txtSold}>50 sold</BaseText>
        </View>
        {ActionButton}
      </View>
    </Card>
  );
};