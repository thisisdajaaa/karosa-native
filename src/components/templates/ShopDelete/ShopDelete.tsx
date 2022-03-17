/**
 *
 * ShopDelete
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Button from "@app/atoms/Button";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import { ICON } from "./config";
import ShopDeleteStyles from "./styles";

const ShopDeleteTemplate: FC<PropsType> = (props) => {
  const { onDelete, sheetRef } = props;

  const getHeader = () => {
    return (
      <>
        <Text text="Delete Shop" textStyle={ShopDeleteStyles.txtDeleteShop} />
        <View style={ShopDeleteStyles.spacer} />
      </>
    );
  };

  const getContent = () => {
    return (
      <View style={ShopDeleteStyles.container}>
        <View style={ShopDeleteStyles.illustration}>
          <Icon
            group="shop"
            name="illustrationSad"
            height={ICON.HEIGHT}
            width={ICON.WIDTH}
          />
        </View>

        <Text
          text=" We are sad that you don't want to be a seller anymore, but please note
        that shop deletion is not irreversable. Shop settings and products will
        be deleted as well."
          textStyle={ShopDeleteStyles.txtDeleteShopPar}
        />

        <View style={ShopDeleteStyles.buttonContainer}>
          <Button
            onPress={onDelete}
            title="Delete"
            titleStyle={ShopDeleteStyles.txtDelete}
          />
          <View style={ShopDeleteStyles.subButtonContainer}>
            <Button
              onPress={() => sheetRef.current?.close()}
              title="Cancel"
              buttonStyle={ShopDeleteStyles.btnCancelColor}
              titleStyle={ShopDeleteStyles.txtBtnCancel}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <>{getContent()}</>
    </>
  );
};

export default ShopDeleteTemplate;
