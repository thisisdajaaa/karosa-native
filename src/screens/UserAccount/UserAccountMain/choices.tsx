import React from "react";
import { View } from "react-native";
import { theme } from "@app/styles";
import { MultiList } from "@app/organisms/MultiList";
import { Props as MultiListProps } from "@app/organisms/MultiList/types";

import { styles } from "./styles";

const Choices = () => {
  const multiListProps: MultiListProps = {
    multiChev: [
      {
        title: "My Wishlist",
        info: "140 Items",
        listColor: theme.colors.orange5,
        hasBottomDivider: true,
        onPress: () => console.log("My Wishlist"),
      },
      {
        title: "Karosa Wallet",
        listColor: theme.colors.purple,
        hasBottomDivider: true,
        onPress: () => console.log("Karosa Wallet"),
      },
      {
        title: "Vouchers",
        listColor: theme.colors.green5,
        hasBottomDivider: true,
        onPress: () => console.log("Vouchers"),
      },
      {
        title: "Refer a friend",
        listColor: theme.colors.red5,
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
