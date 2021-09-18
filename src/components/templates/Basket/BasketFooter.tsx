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
import { useUpdateEffect } from "@app/hooks";
import { COMMON } from "@app/constants";
import Text from "@app/atoms/Text";
import ListChevron from "@app/organisms/ListChevron";
import Button from "@app/atoms/Button";

import { ICON_SIZE, INITIAL_REDUCE } from "./config";
import BasketStyles from "./styles";

const BasketFooter: FC = () => {
  const { values } = useFormikContext<BasketContext>();

  const [subTotal, setSubTotal] = useState<number>(INITIAL_REDUCE);

  const memoizedData: StoreData[] = useMemo(() => values.storeData, [values]);

  useUpdateEffect(() => {
    const mappedPrice = memoizedData.map((store) =>
      store.items.filter((item) => item.isChecked && item.price)
    );

    const updatedTotal = mappedPrice
      .flat()
      .reduce(
        (accumulator, currentValue) => (accumulator += currentValue.price),
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
