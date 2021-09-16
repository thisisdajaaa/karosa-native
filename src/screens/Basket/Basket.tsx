/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FormikProvider, useFormik } from "formik";
import BasketTemplate from "@app/templates/Basket";
import { useMemoizedSelector } from "@app/hooks";
import { selectors } from "@app/redux/shop";
import { useNavigation } from "@react-navigation/native";

const BasketScreen: FC = () => {
  const { goBack } = useNavigation();

  const basket = useMemoizedSelector(selectors.getBasket);

  const { storeData } = basket;

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const formikBag = useFormik({
    initialValues: { storeData },
    onSubmit: () => alert("submit"),
  });

  return (
    <FormikProvider value={formikBag}>
      <BasketTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default BasketScreen;
