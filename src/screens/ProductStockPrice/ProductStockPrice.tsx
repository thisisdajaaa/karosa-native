/**
 *
 * ProductStockPrice
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
import ProductStockPriceTemplate from "@app/templates/ProductStockPrice";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const ProductStockPriceScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const variationForm = useMemoizedSelector(selectors.getVariationForm);

  const { variationData } = variationForm;

  const setVariationForm = useCallback(
    (values: VariationForm) => dispatch(actions.setVariationForm(values)),
    [dispatch]
  );

  const handleSubmit = (values: VariationForm) => {
    setVariationForm({ ...values });
    navigate(routes.PRODUCT_ADD);
  };

  const formikBag = useFormik({
    initialValues: { variationData },
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema,
  });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <FormikProvider value={formikBag}>
      <ProductStockPriceTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default ProductStockPriceScreen;
