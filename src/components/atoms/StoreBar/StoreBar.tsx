/**
 *
 * StoreBar
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { CheckBox as RnCheckbox } from "react-native-elements";
import ListChevron from "@app/organisms/ListChevron";

import type { PropsType } from "./types";
import StoreBarStyles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLOR } from "./config";

const StoreBar: FC<PropsType> = (props) => {
  const { isChecked, onPress, storeProps } = props;

  const StoreCheckbox = () => {
    return (
      <RnCheckbox
        checkedColor={COLOR}
        titleProps={{ style: StoreBarStyles.text }}
        containerStyle={StoreBarStyles.container}
        checked={isChecked}
        onPress={onPress}
      />
    );
  };

  return (
    <View style={StoreBarStyles.storeNameBarStyle}>
      <View style={StoreBarStyles.chevronStyle}>
        <StoreCheckbox />
        <MaterialCommunityIcons
          name="storefront-outline"
          size={24}
          color="#0AA351"
        />
        <View>
          <ListChevron {...storeProps} />
        </View>
      </View>
      <View style={StoreBarStyles.edittxt}></View>
    </View>
  );
};

export default StoreBar;
