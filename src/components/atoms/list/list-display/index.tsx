import React from "react";
import { View } from "react-native";

import { BaseText } from "../../base-text";

import { Props, AddressProps } from "./types";
import { styles } from "./styles";

export const ListDisplay: React.FC<Props> = ({ text, style }) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      <View style={styles.detailsContainer}>
        <BaseText
          customStyles={[styles.left, style?.textStyle]}
          numberOfLines={1}
        >
          {text.left}
        </BaseText>
      </View>

      <BaseText style={styles.right}>{text.right}</BaseText>
    </View>
  );
};

export const AddressList: React.FC<AddressProps> = ({ address, style }) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      <View style={styles.detailsContainer}>
        <BaseText
          customStyles={[styles.left, style?.textStyle]}
          numberOfLines={1}
        >
          {address.name}
        </BaseText>

        <BaseText>{address.address}</BaseText>
      </View>

      <BaseText style={[styles.default]}>
        {address.default && "default"}
      </BaseText>
    </View>
  );
};
