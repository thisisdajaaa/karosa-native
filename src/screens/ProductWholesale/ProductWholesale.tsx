/**
 *
 * ProductWholesale
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormik, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { WholesaleForm } from "@app/redux/shop/models";
import ProductWholesaleTemplate from "@app/templates/ProductWholesale";

const ProductWholesaleScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const wholesaleForm = useMemoizedSelector(selectors.getWholesaleForm);

  const setWholesaleForm = useCallback(
    (values: WholesaleForm) => dispatch(actions.setWholesaleForm(values)),
    [dispatch]
  );

  const handleSubmit = (values: WholesaleForm) => {
    setWholesaleForm({ ...values });
    goBack();
  };

  const formikBag = useFormik({
    initialValues: wholesaleForm,
    onSubmit: handleSubmit,
  });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <FormikProvider value={formikBag}>
      <ProductWholesaleTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default ProductWholesaleScreen;
