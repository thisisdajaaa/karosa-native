/**
 *
 * BasketItemQuantityPrice
 * @format
 *
 */

import React, { FC, useState } from "react";
import { Alert, View } from "react-native";
import { useFormikContext } from "formik";
import { BasketContext, StoreData } from "@app/redux/shop/models";
import { useMount, useUpdateEffect } from "@app/hooks";
import { currencyFormatter } from "@app/utils";
import FormQuantity from "@app/molecules/FormQuantity";
import Text from "@app/atoms/Text";

import type { BasketItemQuantityProps } from "./types";
import BasketStyles from "./styles";

const BasketItemQuantityPrice: FC<BasketItemQuantityProps> = (props) => {
  const { index, storeItemKey, handleRemove } = props;

  const { values, setValues } = useFormikContext<BasketContext>();

  const basketItem = values.storeData[index].items[storeItemKey];

  const [basePrice, setBasePrice] = useState<number>(basketItem.price);

  useMount(() => {
    setBasePrice(basketItem.price);
  });

  const handleDecrement = () => {
    Alert.alert("Are you sure?", "Are you sure to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => handleRemove(), style: "destructive" },
    ]);
  };

  useUpdateEffect(() => {
    const quantity = basketItem.quantity;

    const updatedPrice = basePrice * quantity;

    const newStoreData: StoreData[] = values.storeData.map((store) => {
      if (Number(store.id) === Number(values.storeData[index].id)) {
        return {
          ...store,
          items: store.items.map((item) => {
            if (Number(item.id) === Number(basketItem.id)) {
              return {
                ...item,
                price: updatedPrice,
              };
            }

            return {
              ...item,
            };
          }),
        };
      }

      return {
        ...store,
      };
    });

    setValues({
      ...values.storeData,
      storeData: newStoreData,
    });
  }, [basketItem.quantity]);

  const disableIncrement = () => {
    const quantity = basketItem.quantity;
    const stock = basketItem.stock;

    return quantity >= stock;
  };

  return (
    <View style={BasketStyles.quantityPriceContainer}>
      <View style={BasketStyles.priceContainer}>
        <Text
          text={currencyFormatter(String(basketItem.price), "₱")}
          textStyle={BasketStyles.txtPrice}
        />
      </View>

      <FormQuantity
        onDecrement={handleDecrement}
        disableIncrement={disableIncrement()}
        name={`storeData[${index}].items[${storeItemKey}].quantity`}
      />
    </View>
  );
};

export default BasketItemQuantityPrice;
