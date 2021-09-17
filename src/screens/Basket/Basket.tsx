/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { FormikProvider, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { selectors } from "@app/redux/shop";
import BasketTemplate from "@app/templates/Basket";

const BasketScreen: FC = () => {
  const { goBack } = useNavigation();

  const basket = useMemoizedSelector(selectors.getBasket);

  const { storeData } = basket;

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  /** Temporary submit since order array structure is still TBD */
  const handleSubmit = () => {
    0;
  };

  const formikBag = useFormik({
    initialValues: { storeData },
    onSubmit: () => handleSubmit(),
  });

  return (
    <FormikProvider value={formikBag}>
      <BasketTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default BasketScreen;
