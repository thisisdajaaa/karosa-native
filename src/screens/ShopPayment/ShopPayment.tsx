/**
 *
 * ShopPayment
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FormikProvider, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { selectors, actions } from "@app/redux/shop";
import { ShopPaymentForm } from "@app/redux/shop/models";
import { useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import ShopPaymentTemplate from "@app/templates/ShopPayment";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const ShopPaymentScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const shopPaymentForm = useMemoizedSelector(selectors.getShopPayment);

  const setShopPayment = useCallback(
    (value: ShopPaymentForm) => dispatch(actions.setShopPayment(value)),
    [dispatch]
  );

  const setShopPaymentOption = useCallback(
    (value: boolean) => dispatch(actions.setShopPaymentOption(value)),
    [dispatch]
  );

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSubmit = (values: ShopPaymentForm) => {
    setShopPayment({ ...values });
    setShopPaymentOption(true);
    navigate(routes.SHOP_SETTINGS);
  };

  const formikBag = useFormik<ShopPaymentForm>({
    initialValues: shopPaymentForm,
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema,
  });

  useUpdateEffect(() => {
    const { cod, gcash, creditCard } = formikBag.values;

    const hasOneOption = [creditCard, gcash, cod].some((value) => value);

    formikBag.setFieldValue("hasOneOption", hasOneOption);
  }, [
    formikBag.values.cod,
    formikBag.values.gcash,
    formikBag.values.creditCard,
  ]);

  return (
    <FormikProvider value={formikBag}>
      <ShopPaymentTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default ShopPaymentScreen;
