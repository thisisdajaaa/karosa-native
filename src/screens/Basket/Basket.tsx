/**
 *
 * Basket
 * @format
 *
 */

import React, { FC } from "react";
import { FormikProvider, useFormik } from "formik";
import BasketTemplate from "@app/templates/Basket";
import { useMemoizedSelector } from "@app/hooks";
import { selectors } from "@app/redux/shop";

const BasketScreen: FC = () => {
  const basket = useMemoizedSelector(selectors.getBasket);

  const { storeData } = basket;

  const formikBag = useFormik({
    initialValues: { storeData },
    onSubmit: () => alert("submit"),
  });

  return (
    <FormikProvider value={formikBag}>
      <BasketTemplate />
    </FormikProvider>
  );
};

export default BasketScreen;
