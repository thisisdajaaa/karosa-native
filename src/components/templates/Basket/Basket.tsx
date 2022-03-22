/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormikContext } from "formik";
import { isEmpty } from "lodash";
import { FlatList, KeyboardAvoidingView, View } from "react-native";
import { theme } from "@app/styles";
import { BasketContext } from "@app/redux/shop/models";
import { getPlatform } from "@app/utils";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import Header from "@app/molecules/Header";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";
import { EMPTY_ICON, ICON_SIZE } from "./config";
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
          text: "My Basket",
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

      {!isEmpty(values.storeData) && (
        <KeyboardAvoidingView
          style={BasketStyles.container}
          behavior={isIOS ? "padding" : undefined}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            data={values.storeData}
            ListFooterComponent={<View style={BasketStyles.listFooter} />}
            renderItem={({ item, index: storeIndex }) => (
              <>
                {!isEmpty(item.items) && (
                  <BasketItem
                    key={item.id}
                    item={item}
                    storeIndex={storeIndex}
                  />
                )}
              </>
            )}
          />

          <BasketFooter />
        </KeyboardAvoidingView>
      )}

      {isEmpty(values.storeData) && (
        <View style={BasketStyles.emptyContainer}>
          <Icon
            group="basket"
            name="empty"
            height={EMPTY_ICON}
            width={EMPTY_ICON}
            extraStyle={BasketStyles.empty}
          />

          <Text
            text="Continue shopping to enjoy discounts. Refill your basket now!"
            textStyle={BasketStyles.txtEmpty}
          />

          <Button
            title="Continue Shopping"
            onPress={() => 0}
            buttonStyle={BasketStyles.btnShopping}
            containerStyle={BasketStyles.shoppingContainer}
            titleStyle={BasketStyles.txtShopping}
          />
        </View>
      )}
    </>
  );
};

export default BasketTemplate;
