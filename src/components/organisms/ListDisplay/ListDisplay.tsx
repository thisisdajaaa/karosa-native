/**
 *
 * ListDisplay
 * @format
 *
 */

import React from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import { Props, AddressProps } from "./types";
import { styles } from "./styles";

export const ListDisplay: React.FC<Props> = ({ text, style }) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      <View style={styles.detailsContainer}>
        <Text
          text={text.left}
          numberOfLines={1}
          textStyle={[styles.left, style?.textStyle]}
        />
      </View>
      <Text text={text.right} textStyle={styles.right} />
    </View>
  );
};

export const AddressList: React.FC<AddressProps> = ({ address, style }) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      <View style={styles.detailsContainer}>
        <Text
          text={address.name}
          numberOfLines={1}
          textStyle={[styles.left, style?.textStyle]}
        />
        <Text text={address.detailedAddress} />
      </View>
      <Text
        text={address.default ? "default" : ""}
        textStyle={styles.default}
      />
    </View>
  );
};
