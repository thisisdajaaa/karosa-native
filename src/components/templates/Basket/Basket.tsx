/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormikContext } from "formik";
import { isEmpty } from "ramda";
import { FlatList, KeyboardAvoidingView, View } from "react-native";
import { theme } from "@app/styles";
import { BasketContext } from "@app/redux/shop/models";
import { getPlatform } from "@app/utils";
import Icon from "@app/atoms/Icon";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import { ICON_SIZE } from "./config";
import BasketStyles from "./styles";
import BasketItem from "./BasketItem";
import BasketFooter from "./BasketFooter";

const BasketTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values } = useFormikContext<BasketContext>();

  const isIOS = getPlatform.getInstance() === "ios";

  const keyExtractor = useCallback((_, key) => key.toString(), []);

  return (
    <>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Basket",
          style: BasketStyles.txtHeader,
        }}
        rightComponent={
          <Icon
            group="basket"
            name="message"
            height={ICON_SIZE}
            width={ICON_SIZE}
          />
        }
      />
      <KeyboardAvoidingView
        style={BasketStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          data={values.storeData}
          ListFooterComponent={<View style={BasketStyles.listFooter} />}
          renderItem={({ item, index: storeIndex }) => (
            <>
              {!isEmpty(item.items) ? (
                <BasketItem key={item.id} item={item} storeIndex={storeIndex} />
              ) : (
                <></>
              )}
            </>
          )}
        />

        <BasketFooter />
      </KeyboardAvoidingView>
    </>
  );
};

export default BasketTemplate;
