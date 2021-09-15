import React, { FC, useEffect, useState } from "react";
import Text from "@app/atoms/Text";
import { useFormikContext } from "formik";
import { BasketContext } from "@app/redux/shop/models";
import { theme } from "@app/styles";

type Props = {
  index: number;
  storeItemKey: number;
  currentPrice: string;
};

const Price: FC<Props> = (props) => {
  const { index, storeItemKey, currentPrice } = props;

  const { values, initialValues } = useFormikContext<BasketContext>();

  const [price, setPrice] = useState<number>(Number(currentPrice));

  const basePrice = Number(
    initialValues.storeData[index].items[storeItemKey].price
  );

  useEffect(() => {
    setPrice(
      basePrice * Number(values.storeData[index].items[storeItemKey].quantity)
    );
  }, [values.storeData[index].items[storeItemKey].quantity]);

  return (
    <Text
      text={`P${price}`}
      textStyle={{
        ...theme.textRegular,
        color: theme.colors.primary,
      }}
    />
  );
};

export default Price;
