import React from "react";
import { View } from "react-native";

import { MultiList } from "../../atoms/multi-list";
import { Props as MultiListProps } from "../../atoms/multi-list/types";

import { styles } from "./styles";

const Choices = () => {
  const multiListProps: MultiListProps = {
    multiChev: [
      {
        title: "My Wishlist",
        rightLabel: "140 Items",
        listColor: "#F09A36",
        hasSeparator: true,
        onPress: () => console.log("My Wishlist"),
      },
      {
        title: "Karosa Wallet",
        listColor: "#5756CE",
        hasSeparator: true,
        onPress: () => console.log("Karosa Wallet"),
      },
      {
        title: "Vouchers",
        listColor: "#64C465",
        hasSeparator: true,
        onPress: () => console.log("Vouchers"),
      },
      {
        title: "Refer a friend",
        listColor: "#EB4837",
        onPress: () => console.log("Refer a friend"),
      },
    ],
  };

  return (
    <View style={styles.choicesContainer}>
      <MultiList {...multiListProps} />
    </View>
  );
};

export default Choices;
