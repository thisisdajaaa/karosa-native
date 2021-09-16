import React, { FC, useEffect, useMemo, useState } from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";
import { theme } from "@app/styles";
import { BasketContext, StoreData } from "@app/redux/shop/models";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import ListChevron from "@app/components/organisms/ListChevron";
import Button from "@app/atoms/Button";

const BasketFooter: FC = () => {
  const { values, initialValues } = useFormikContext<BasketContext>();

  const initialTotal = initialValues.storeData.reduce(
    (accumulator, { items }) => {
      items.forEach((item) => {
        accumulator += item.price;
      });

      return accumulator;
    },
    0
  );

  const [subTotal, setSubTotal] = useState<number>(initialTotal);

  const memoizedData: StoreData[] = useMemo(() => values.storeData, [values]);

  useEffect(() => {
    const mappedPrice = memoizedData.map((store) =>
      store.items.map((item) => item.price)
    );

    const updatedTotal = mappedPrice
      .flat()
      .reduce((accumulator, currentValue) => (accumulator += currentValue), 0);

    setSubTotal(updatedTotal);
  }, [memoizedData]);

  return (
    <View style={{ marginTop: 12 }}>
      <ListChevron
        title="Karosa Voucher"
        onPress={() => alert("clicked")}
        variation={1}
        info="Select / Code"
        infoStyle={{
          ...theme.textRegular,
          color: theme.colors.dark10,
        }}
        titleStyle={{
          ...theme.textRegular,
        }}
        chevronColor={theme.colors.primary}
        icon={{
          group: "basket",
          name: "voucher",
          height: 24,
          width: 24,
        }}
        hasBottomDivider
      />
      <ListItem containerStyle={{ height: 64, justifyContent: "flex-end" }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            text="Sub-Total:"
            textStyle={{ ...theme.textRegular, fontWeight: "700" }}
          />
          <Text
            text={`P${subTotal}`}
            textStyle={{
              ...theme.textSemiBold,
              color: theme.colors.primary,
              textAlign: "right",
            }}
          />
        </View>
        <Button
          title="Checkout"
          onPress={() => alert("G")}
          buttonStyle={{ paddingVertical: 16, paddingHorizontal: 48 }}
          titleStyle={{ ...theme.textLightBold }}
        />
      </ListItem>
    </View>
  );
};

export default BasketFooter;
