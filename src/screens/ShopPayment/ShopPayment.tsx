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
import routes from "@app/navigators/routes";

const ShopPaymentScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const shopPaymentForm = useMemoizedSelector(selectors.getShopPayment);

  const setShopPayment = useCallback(
    (value: ShopPaymentForm) => dispatch(actions.setShopPayment(value)),
    [dispatch]
  );

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSubmit = (values: ShopPaymentForm) => {
    setShopPayment({ ...values });
    navigate(routes.SHOP_SETTINGS);
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

export default ShopPaymentScreen;
