/**
 *
 * ProductVariation
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormik, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { VariationForm } from "@app/redux/shop/models";
import ProductVariationTemplate from "@app/templates/ProductVariation";

const ProductVariationScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const variationForm = useMemoizedSelector(selectors.getVariationForm);

  const setVariationForm = useCallback(
    (values: VariationForm) => dispatch(actions.setVariationForm(values)),
    [dispatch]
  );

  const handleSubmit = (values: VariationForm) => {
    setVariationForm({ ...values });
    goBack();
  };

  const formikBag = useFormik({
    initialValues: variationForm,
    onSubmit: handleSubmit,
  });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <FormikProvider value={formikBag}>
      <ProductVariationTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default ProductVariationScreen;
