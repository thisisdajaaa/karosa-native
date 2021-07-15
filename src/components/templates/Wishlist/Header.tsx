import Header from "@app/components/molecules/Header";
import { theme } from "@app/styles";
import React, { FC } from "react";
import type { HeaderProps } from "./types";

const WishlistHeader: FC<HeaderProps> = (props) => {
  const { products } = props;

  return (
    <Header
      hasBottomDivider
      leftComponent={{
        icon: "arrow-back",
        color: theme.colors.primary,
        // onPress: navigation.onBack,
      }}
      centerComponent={{
        text: "My Wishlist" + "(" + products.length + ")",
      }}
      rightComponent={{
        icon: "chat",
        color: theme.colors.primary,
      }}
    />
  );
};

export default WishlistHeader;
