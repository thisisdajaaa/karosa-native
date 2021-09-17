/**
 *
 * BasketFooter
 * @format
 *
 */

import React, { FC, useMemo, useState } from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { BasketContext, StoreData } from "@app/redux/shop/models";
import Text from "@app/atoms/Text";
import ListChevron from "@app/organisms/ListChevron";
import Button from "@app/atoms/Button";
import { useUpdateEffect } from "@app/hooks";
import { COMMON } from "@app/constants";

import { ICON_SIZE, INITIAL_REDUCE } from "./config";
import BasketStyles from "./styles";

const BasketFooter: FC = () => {
  const { values, initialValues } = useFormikContext<BasketContext>();

  const initialTotal = initialValues.storeData.reduce(
    (accumulator, { items }) => {
      items.forEach((item) => {
        accumulator += item.price;
      });

      return accumulator;
    },
    INITIAL_REDUCE
  );

  const [subTotal, setSubTotal] = useState<number>(initialTotal);

  const memoizedData: StoreData[] = useMemo(() => values.storeData, [values]);

  useUpdateEffect(() => {
    const mappedPrice = memoizedData.map((store) =>
      store.items.map((item) => item.price)
    );

    const updatedTotal = mappedPrice
      .flat()
      .reduce(
        (accumulator, currentValue) => (accumulator += currentValue),
        INITIAL_REDUCE
      );

    setSubTotal(updatedTotal);
  }, [memoizedData]);

  return (
    <View style={BasketStyles.basketFooterContainer}>
      <ListChevron
        title="Karosa Voucher"
        onPress={() => 0}
        variation={COMMON.VARIATION.ONE}
        info="Select / Code"
        infoStyle={BasketStyles.txtVoucherInfo}
        titleStyle={BasketStyles.txtVoucher}
        chevronColor={theme.colors.primary}
        icon={{
          group: "basket",
          name: "voucher",
          height: ICON_SIZE,
          width: ICON_SIZE,
        }}
        hasBottomDivider
      />
      <ListItem containerStyle={BasketStyles.bottomFooterContainer}>
        <View style={BasketStyles.flexColumn}>
          <Text text="Sub-Total:" textStyle={BasketStyles.txtSubTotal} />
          <Text text={`P${subTotal}`} textStyle={BasketStyles.txtTotal} />
        </View>
        <Button
          title="Checkout"
          onPress={() => 0}
          buttonStyle={BasketStyles.btnCheckout}
          titleStyle={BasketStyles.txtBtnCheckout}
        />
      </ListItem>
    </View>
  );
};

export default BasketFooter;
