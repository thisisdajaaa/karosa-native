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
  };

  const formikBag = useFormik({
    initialValues: { variationData },
    onSubmit: handleSubmit,
  });

  const handleBack = useCallback(() => {
    navigate(routes.ADD_VARIATION);
  }, [goBack]);

  return (
    <FormikProvider value={formikBag}>
      <ProductStockPriceTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default ProductStockPriceScreen;
