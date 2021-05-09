/**
 *
 * ProductShipping
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormik, FormikProvider } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { ShippingDetailsForm } from "@app/redux/shop/models";
import { useNavigation } from "@react-navigation/native";
import ProductShippingTemplate from "@app/templates/ProductShipping";

import { useDispatch } from "react-redux";

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

  const formikBag = useFormik({
    initialValues: shippingDetailsForm,
    onSubmit: handleSubmit,
  });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const disableSwitch = formikBag.values.weight === "";

  return (
    <FormikProvider value={formikBag}>
      <ProductShippingTemplate
        onBack={handleBack}
        disableSwitch={disableSwitch}
      />
    </FormikProvider>
  );
};

export default ProductShippingScreen;
