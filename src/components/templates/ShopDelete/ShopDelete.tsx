/**
 *
 * ShopDelete
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import Button from "@app/atoms/Button";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ShopDeleteStyles from "./styles";
import { View } from "react-native";

const ShopDelete: FC<PropsType> = (props) => {
  const { onDelete, sheetRef } = props;

  return (
    <Fragment>
      <Text text="Delete Shop" textStyle={ShopDeleteStyles.txtDeleteShop} />
      <View style={ShopDeleteStyles.spacer} />
      <View style={ShopDeleteStyles.container}>
        <Text
          text=" We are sad that you don't want to be a seller anymore, but please note
        that shop deletion is not irreversable. Shop settings and products will
        be deleted as well."
          textStyle={ShopDeleteStyles.txtDeleteShopPar}
        />

        <View style={ShopDeleteStyles.buttonContainer}>
          <Button onPress={onDelete} title="Delete" />
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
    </Fragment>
  );
};

export default ShopDelete;