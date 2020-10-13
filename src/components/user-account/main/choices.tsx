import React from "react";
import { View } from "react-native";

import { MultiList } from "../../atoms/multi-list";
import { Props as MultiListProps } from "../../atoms/multi-list/types";

import { styles } from "./styles";

const Choices = () => {
  const multiListProps: MultiListProps = {
    listItem: [
      {
        title: "My Wishlist",
        rightLabel: "140 Items",
        listColor: "#F09A36",
        chevron: true,
        hasSeparator: true,
      },
      {
        title: "Karosa Wallet",
        listColor: "#5756CE",
        chevron: true,
        hasSeparator: true,
      },
      {
        title: "Vouchers",
        listColor: "#64C465",
        chevron: true,
        hasSeparator: true,
      },
      {
        title: "Refer a friend",
        listColor: "#EB4837",
        chevron: true,
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
