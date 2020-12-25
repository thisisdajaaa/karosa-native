import React from "react";
import { View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AppButton } from "@app/components/button";
import { BottomSheet } from "@app/components/bottom-sheet";
import { Props as ButtonProps } from "@app/components/button/types";
import { MODAL_SIZE } from "@app/constants";

import { Props } from "./types";
import { styles } from "./styles";

const DeleteShopModal: React.FC<Props> = ({ sheetRef }) => {
  const deleteButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Delete",
    containerStyle: styles.btnDeleteContainer,
    textStyle: styles.txtBtnDelete,
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: styles.btnCancelContainer,
    textStyle: styles.txtBtnCancel,
  };

  return (
    <BottomSheet height={MODAL_SIZE.DEL_SHOP_MODAL} ref={sheetRef}>
      <BaseText style={styles.txtDeleteShop}>Delete Shop</BaseText>
      <BaseText style={styles.txtDeleteShopPar}>
        We are sad that you don't want to be a seller anymore, but please note
        that shop deletion is not irreversable. Shop settings and products will
        be deleted as well.
      </BaseText>

      <View style={styles.buttonContainer}>
        <AppButton {...deleteButtonProps} />
        <AppButton {...cancelButtonProps} />
      </View>
    </BottomSheet>
  );
};

export default DeleteShopModal;
