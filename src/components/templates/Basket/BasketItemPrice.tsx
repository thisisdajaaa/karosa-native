import React, { FC, useState } from "react";
import Text from "@app/atoms/Text";
import { useFormikContext } from "formik";
import { BasketContext, StoreData } from "@app/redux/shop/models";
import { theme } from "@app/styles";
import { useMount, useUpdateEffect } from "@app/hooks";

type Props = {
  index: number;
  storeItemKey: number;
  currentPrice: number;
};

const BasketItemPrice: FC<Props> = (props) => {
  const { index, storeItemKey, currentPrice } = props;

  const { values, setValues } = useFormikContext<BasketContext>();

  const initialPrice = values.storeData[index].items[storeItemKey].price;

  const [price, setPrice] = useState<number>(currentPrice);
  const [basePrice, setBasePrice] = useState<number>(initialPrice);

  useMount(() => {
    setBasePrice(values.storeData[index].items[storeItemKey].price);
  });

  const memoizeData = React.useMemo(
    () => values.storeData[index].items[storeItemKey].quantity,
    [values.storeData[index].items]
  );

  useUpdateEffect(() => {
    const quantity = values.storeData[index].items[storeItemKey].quantity;

    const updatedPrice = basePrice * quantity;

    setPrice(updatedPrice);

    const newStoreData: StoreData[] = values.storeData.map((store) => {
      if (Number(store.id) === Number(values.storeData[index].id)) {
        return {
          ...store,
          items: store.items.map((item) => {
            if (Number(item.id) === Number(store.items[storeItemKey].id)) {
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
  }, [memoizeData]);

  return (
    <Text
      text={`P${String(price)}`}
      textStyle={{
        ...theme.textRegular,
        color: theme.colors.primary,
      }}
    />
  );
};

export default BasketItemPrice;
