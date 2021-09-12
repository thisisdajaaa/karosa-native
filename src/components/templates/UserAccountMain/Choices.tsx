import React from "react";
import { View } from "react-native";
import { theme } from "@app/styles";
import { MultiList } from "@app/organisms/MultiList";
import { Props as MultiListProps } from "@app/organisms/MultiList/types";

import UserAccountMainStyles from "./styles";

const Choices = () => {
  const multiListProps: MultiListProps = {
    multiChev: [
      {
        title: "My Wishlist",
        info: "140 Items",
        listColor: theme.colors.orange5,
        hasBottomDivider: true,
        onPress: () => 0,
      },
      {
        title: "Karosa Wallet",
        listColor: theme.colors.purple,
        hasBottomDivider: true,
        onPress: () => 0,
      },
      {
        title: "Vouchers",
        listColor: theme.colors.green5,
        hasBottomDivider: true,
        onPress: () => 0,
      },
      {
        title: "Refer a friend",
        listColor: theme.colors.red5,
        onPress: () => 0,
      },
    ],
  };

  return (
    <View style={UserAccountMainStyles.choicesContainer}>
      <MultiList {...multiListProps} />
    </View>
  );
};

export default Choices;
