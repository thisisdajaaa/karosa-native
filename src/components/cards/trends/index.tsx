import React from "react";
import { View } from "react-native";
import { Card } from "react-native-elements";
import { BaseText } from "@app/components/base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const Trends: React.FC<Props> = ({ item }) => {
  return (
    <Card
      containerStyle={{
        height: 64,
        width: 155,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 10,
        borderRadius: 3,
        shadowOpacity: 0.1,
        shadowOffset: { height: 4, width: 1 },
        shadowColor: "black",
      }}
    >
      <View style={styles.trendContainer}>
        <View style={styles.txtContainer}>
          <BaseText style={styles.txtName}>{item.name}</BaseText>
          <BaseText style={styles.txtAmount}>{item.amount} Products</BaseText>
        </View>
        <View style={styles.icon} />
      </View>
    </Card>
  );
};
