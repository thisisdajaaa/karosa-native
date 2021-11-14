/**
 *
 * ProductShipping
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormik, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { ShippingDetailsForm } from "@app/redux/shop/models";
import ProductShippingTemplate from "@app/templates/ProductShipping";

import validationSchema from "./validation";

const ProductShippingScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const setShippingDetailsForm = useCallback(
    (values: ShippingDetailsForm) =>
      dispatch(actions.setShippingDetailsForm(values)),
    [dispatch]
  );

  const shippingDetailsForm = useMemoizedSelector(
    selectors.getShippingDetailsForm
  );

  const handleSubmit = (values: ShippingDetailsForm) => {
    setShippingDetailsForm({ ...values });
    goBack();
  };

  const formikBag = useFormik<ShippingDetailsForm>({
    initialValues: shippingDetailsForm,
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema,
  });

  useUpdateEffect(() => {
    const { expressDelivery, sellerCourier, pickUpBuyer } = formikBag.values;

    const hasOneOption = [expressDelivery, sellerCourier, pickUpBuyer].some(
      (value) => value
    );

    formikBag.setFieldValue("hasOneOption", hasOneOption);
  }, [
    formikBag.values.expressDelivery,
    formikBag.values.sellerCourier,
    formikBag.values.pickUpBuyer,
  ]);

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <FormikProvider value={formikBag}>
      <ProductShippingTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default ProductShippingScreen;
