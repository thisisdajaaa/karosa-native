import { Connection } from "@app/utils";
import React, { forwardRef, memo, useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import ConnectionItem from "./ConnectionItem";

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ConnectionList = forwardRef<FlatList, any>((props, ref) => {
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = useCallback<ListRenderItem<Connection>>(
    ({ item }) => <ConnectionItem connection={item} />,
    []
  );

  return (
    <AnimatedFlatList
      ref={ref}
      style={styles.container}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default memo(ConnectionList);
