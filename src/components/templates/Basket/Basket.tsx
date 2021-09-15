/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormikContext } from "formik";
import { FlatList, KeyboardAvoidingView } from "react-native";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import { BasketContext } from "@app/redux/shop/models";
import { getPlatform } from "@app/utils";

import BasketStyles from "./styles";
import BasketItem from "./BasketItem";

const BasketTemplate: FC = () => {
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
          onPress: () => 0,
        }}
        centerComponent={{
          text: "Basket",
          style: BasketStyles.txtHeader,
        }}
      />
      <KeyboardAvoidingView
        style={BasketStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <FlatList
          keyExtractor={keyExtractor}
          data={values.storeData}
          renderItem={({ item, index: storeIndex }) => (
            <BasketItem key={item.id} item={item} storeIndex={storeIndex} />
          )}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default BasketTemplate;
