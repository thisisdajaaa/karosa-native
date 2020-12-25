import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { BottomSheet } from "@app/components/bottom-sheet";
import { actions } from "@app/redux/shop";
import { theme } from "@app/styles";
import { CommonStatus } from "@app/redux/shop/models";
import { BaseText } from "@app/components/base-text";
import { MultiList } from "@app/components/multi-list";
import { Separator } from "@app/components/separator";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { MODAL_SIZE } from "@app/constants";

import { Props } from "./types";
import { styles, itemStyle } from "./styles";

const ProductStatusModal: React.FC<Props> = ({ sheetRef }) => {
  const dispatch = useDispatch();

  const setProductStatus = useCallback(
    (values: CommonStatus) => dispatch(actions.setProductStatus(values)),
    [dispatch]
  );

  const commonItem = (bgColor: string, text: string) => (
    <React.Fragment>
      <View style={styles.itemContainer}>
        <View style={itemStyle(bgColor).circle} />
        <BaseText style={styles.txtLabel}>{text}</BaseText>
      </View>
      <Separator containerStyle={styles.separator} />
    </React.Fragment>
  );

  const multiListProps: MultiListProps = {
    multiAction: [
      {
        style: {
          containerStyle: styles.actionContainer,
        },
        onClick: () => {
          setProductStatus({
            available: true,
            planting: false,
            harvesting: false,
          });
          sheetRef.current?.close();
        },
        structure: {
          LeftComponent: commonItem(theme.colors.primary, "Available"),
        },
      },
      {
        style: {
          containerStyle: styles.actionContainer,
        },
        onClick: () => {
          setProductStatus({
            available: false,
            planting: true,
            harvesting: false,
          });
          sheetRef.current?.close();
        },
        structure: {
          LeftComponent: commonItem(theme.colors.dark5, "Planting Season"),
        },
      },
      {
        style: {
          containerStyle: styles.actionContainer,
        },
        onClick: () => {
          setProductStatus({
            available: false,
            planting: false,
            harvesting: true,
          });
          sheetRef.current?.close();
        },
        structure: {
          LeftComponent: commonItem(theme.colors.gold5, "Harvesting Season"),
        },
      },
    ],
  };

  return (
    <BottomSheet height={MODAL_SIZE.STATUS_MODAL} ref={sheetRef}>
      <BaseText style={styles.txtProductStatus}>Product Status</BaseText>
      <View style={styles.spacer} />
      <MultiList {...multiListProps} />
    </BottomSheet>
  );
};

export default ProductStatusModal;
