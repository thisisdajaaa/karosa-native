/**
 *
 * Checkout
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormikContext } from "formik";
import { isEmpty } from "ramda";
import { FlatList, KeyboardAvoidingView } from "react-native";
import { CheckoutContext } from "@app/redux/shop/models";
import { getPlatform } from "@app/utils";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import { INITIAL_REDUCE } from "./config";
import CheckoutStyles from "./styles";
import CheckoutItem from "./CheckoutItem";
import Address from "./Address";
import CheckoutFooter from "./CheckoutFooter";

const CheckoutTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values } = useFormikContext<CheckoutContext>();

  const isIOS = getPlatform.getInstance() === "ios";

  const keyExtractor = useCallback((_, key) => key.toString(), []);

  const checkoutItemsTotal = values.orderData.reduce(
    (accumulator, currentValue) => {
      accumulator += currentValue.items.length;
      return accumulator;
    },
    INITIAL_REDUCE
  );

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
          text: `Checkout(${checkoutItemsTotal})`,
          style: CheckoutStyles.txtHeader,
        }}
      />
      <KeyboardAvoidingView
        style={CheckoutStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          data={values.orderData}
          renderItem={({ item, index: storeIndex }) => (
            <>
              {!isEmpty(item.items) ? (
                <CheckoutItem
                  key={item.id}
                  item={item}
                  storeIndex={storeIndex}
                />
              ) : (
                <></>
              )}
            </>
          )}
          ListHeaderComponent={<Address />}
          ListFooterComponent={<CheckoutFooter />}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default CheckoutTemplate;
