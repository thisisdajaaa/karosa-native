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
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const ProductWholesaleScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const wholesaleForm = useMemoizedSelector(selectors.getWholesaleForm);

  const setWholesaleForm = useCallback(
    (values: WholesaleForm) => dispatch(actions.setWholesaleForm(values)),
    [dispatch]
  );

  const handleSubmit = (values: WholesaleForm) => {
    setWholesaleForm({ ...values });
    navigate(routes.PRODUCT_ADD);
  };

  const formikBag = useFormik<WholesaleForm>({
    initialValues: wholesaleForm,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: handleSubmit,
    validationSchema,
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
