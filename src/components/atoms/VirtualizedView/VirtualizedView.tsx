/**
 *
 * VirtualizedView
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { FlatList } from "react-native";

const VirtualizedView: FC = (props) => {
  const { children } = props;

  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => <Fragment>{children}</Fragment>}
    />
  );
};

export default VirtualizedView;
