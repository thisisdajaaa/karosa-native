import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import React, { FC, memo, useMemo } from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import Searchbar from "@app/molecules/SearchBar";

type Props = Pick<ViewProps, "style"> & { name: string };

const HeaderOverlay: FC<Props> = ({ style, name }) => {
  const containerStyle = useMemo(() => [styles.headerContainer, style], [
    style,
  ]);

  return (
    <Header
      containerStyle={containerStyle}
      barStyle="light-content"
      leftComponent={{
        icon: "arrow-back",
        color: theme.colors.primary,
      }}
      centerComponent={
        <View style={{ marginBottom: 15 }}>
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

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.transparent,
  },
});

export default memo(HeaderOverlay);
