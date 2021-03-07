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
import { useMemoizedSelector } from "@app/hooks";
import type { PropsType as FormButtonProps } from "@app/molecules/FormButton/types";
import ShopPaymentTemplate from "@app/templates/ShopPayment";

const ShopPayment: FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const shopPaymentForm = useMemoizedSelector(selectors.getShopPayment);

  const setShopPayment = useCallback(
    (value: ShopPaymentForm) => dispatch(actions.setShopPayment(value)),
    [dispatch]
  );

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  // missing back end implementation
  const handleSubmit = () => {
    setShopPayment({ ...formikBag.values });
  };

  const formikBag = useFormik({
    initialValues: shopPaymentForm,
    onSubmit: handleSubmit,
  });

  const paymentButtonProps: FormButtonProps = {
    title: "Save",
  };

  return (
    <FormikProvider value={formikBag}>
      <ShopPaymentTemplate
        onBack={handleBack}
        paymentButtonProps={paymentButtonProps}
      />
    </FormikProvider>
  );
};

export default ShopPayment;
