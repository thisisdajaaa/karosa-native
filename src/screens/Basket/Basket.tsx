/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FormikProvider, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { selectors, actions } from "@app/redux/shop";
import BasketTemplate from "@app/templates/Basket";
import { PickerData } from "@app/redux/api-models/common";
import {
  StoreItems,
  StoreData,
  OrderData,
  CheckoutContext,
} from "@app/redux/shop/models";
import routes from "@app/navigators/routes";

const BasketScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const basket = useMemoizedSelector(selectors.getBasket);

  const { storeData } = basket;

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const setCheckoutContext = useCallback(
    (values: CheckoutContext) => dispatch(actions.setCheckoutContext(values)),
    [dispatch]
  );

  const formikBag = useFormik({
    initialValues: { storeData },
    onSubmit: () => handleSubmit(),
  });

  const memoizedData: StoreData[] = useMemo(
    () => formikBag.values.storeData,
    [formikBag.values]
  );

  const getPickerLabel = (value: number, picker: PickerData[]) => {
    const filteredPicker = picker.filter((item) =>
      item.label.includes(String(value))
    );
    return filteredPicker[0].label;
  };

  const getStoreTotal = (items: StoreItems[]) =>
    items.reduce((accumulator, currentValue) => {
      if (currentValue.isChecked) {
        return (accumulator += currentValue.price);
      }

      return accumulator;
    }, 0);

  const handleSubmit = () => {
    const mapCheckedItems: StoreData[] = memoizedData
      .filter((store) => store.items.some((item) => item.isChecked))
      .map((store) => {
        return {
          id: store.id,
          storeName: store.storeName,
          isChecked: store.isChecked,
          items: store.items.filter((item) => item.isChecked),
        };
      });

    const orderData: OrderData[] = mapCheckedItems.map((storeItem) => {
      return {
        id: storeItem.id,
        storeName: storeItem.storeName,
        deliveryOption: "1",
        noOfItems: storeItem.items.filter((item) => item.isChecked).length,
        orderTotal: getStoreTotal(storeItem.items),
        items: storeItem.items.map((item) => {
          return {
            id: item.id,
            image: item.image,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            selectedPickerLabel: getPickerLabel(
              item.selectedPicker,
              item.picker
            ),
            selectedPickerValue: item.selectedPicker,
          };
        }),
      };
    });

    const checkoutData: CheckoutContext = {
      orderData,
      paymentMethod: "Cash on Delivery",
    };

    setCheckoutContext(checkoutData);

    navigate(routes.CHECKOUT);
  };

  return (
    <FormikProvider value={formikBag}>
      <BasketTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default BasketScreen;
