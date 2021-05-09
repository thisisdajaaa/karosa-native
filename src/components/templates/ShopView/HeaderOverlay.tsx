/**
 *
 * HeaderOverlay
 * @format
 *
 */

import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import React, { FC, memo, useMemo } from "react";
import { View } from "react-native";
import Searchbar from "@app/molecules/SearchBar";
import { HeaderProps } from "./types";
import { HeaderOverlayStyles } from "./styles";

const HeaderOverlay: FC<HeaderProps> = (props) => {
  const { onBack, style } = props;

  const containerStyle = useMemo(
    () => [HeaderOverlayStyles.headerContainer, style],
    [style]
  );

  return (
    <Header
      containerStyle={containerStyle}
      barStyle="light-content"
      leftComponent={{
        icon: "arrow-back",
        color: theme.colors.primary,
        onPress: onBack,
      }}
      centerComponent={
        <View style={HeaderOverlayStyles.searchbarContainer}>
          <Searchbar
            backgroundColor="secondary"
            size="sm"
            placeholder="Search in Shop"
          />
        </View>
      }
      rightComponent={{
        icon: "more-horiz",
        color: theme.colors.primary,
      }}
    />
  );
};

export default memo(HeaderOverlay);
