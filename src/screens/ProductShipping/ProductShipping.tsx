/**
 *
 * ProductShipping
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormik, FormikProvider } from "formik";
import { batch, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { ShippingDetailsForm } from "@app/redux/shop/models";
import ProductShippingTemplate from "@app/templates/ProductShipping";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const ProductShippingScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const shippingDetailsForm = useMemoizedSelector(
    selectors.getShippingDetailsForm
  );

  const setShippingDetailsForm = useCallback(
    (values: ShippingDetailsForm) =>
      dispatch(actions.setShippingDetailsForm(values)),
    [dispatch]
  );

  const setShippingData = useCallback(
    (values: boolean) => dispatch(actions.setShippingData(values)),
    [dispatch]
  );

  const handleSubmit = (values: ShippingDetailsForm) => {
    batch(() => {
      setShippingDetailsForm({ ...values });
      setShippingData(true);
    });

    navigate(routes.PRODUCT_ADD);
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
