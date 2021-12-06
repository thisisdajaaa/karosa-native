/**
 *
 * Checkout
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { FormikProvider, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { selectors } from "@app/redux/shop";
import CheckoutTemplate from "@app/templates/Checkout";

const CheckoutScreen: FC = () => {
  const { goBack } = useNavigation();

  const checkout = useMemoizedSelector(selectors.getCheckout);

  const { orderData, paymentMethod } = checkout;

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  /** Temporary submit since backend wiring still not finalized */
  const handleSubmit = () => {
    0;
  };

  const formikBag = useFormik({
    initialValues: { orderData, paymentMethod },
    onSubmit: () => handleSubmit(),
  });

  return (
    <FormikProvider value={formikBag}>
      <CheckoutTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default CheckoutScreen;
