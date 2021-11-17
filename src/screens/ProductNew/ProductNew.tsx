/**
 *
 * ProductNew
 * @format
 *
 */

import React, { FC, useCallback, useRef } from "react";
import flatten from "flat";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import RBSheet from "react-native-raw-bottom-sheet";
import { useMemoizedSelector, useMount, useUpdateEffect } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { AddProductRequest, ProductForm } from "@app/redux/shop/models";
import ProductNewTemplate from "@app/templates/ProductNew";
import routes from "@app/navigators/routes";
import ProductStatus from "@app/screens/ProductStatus";
import ProductAvailability from "@app/screens/ProductAvailability";

import type { ProductNewNavigation, ProductNewSheetRefs } from "./types";
import {
  addProductRequest,
  RESPONSE_SUCCESS,
  statusInformation,
} from "./config";

import validationSchema from "./validation";

const ProductNewScreen: FC = () => {
  const dispatch = useDispatch();

  const productStatusRef = useRef<RBSheet>(null);
  const availabilityRef = useRef<RBSheet>(null);

  const { goBack, navigate } = useNavigation();

  const productForm = useMemoizedSelector(selectors.getProductForm);
  const variationForm = useMemoizedSelector(selectors.getVariationForm);
  const availabilityForm = useMemoizedSelector(selectors.getAvailabilityForm);
  const getAddProductResponse = useMemoizedSelector(
    selectors.getAddProductResponse
  );

  const clearProductEntry = useCallback(
    () => dispatch(actions.clearProductEntry()),
    [dispatch]
  );

  const setProductForm = useCallback(
    (values: ProductForm) => dispatch(actions.setProductForm(values)),
    [dispatch]
  );

  const callCategoryListApi = useCallback(() => {
    dispatch(actions.callCategoryListApi.request());
  }, [dispatch]);

  const callAddProductApi = useCallback(
    (values: AddProductRequest) => {
      dispatch(actions.callAddProductApi.request(values));
    },
    [dispatch]
  );

  const { statusValue, statusColor } = statusInformation(productForm.status);

  const handleSubmit = (values: ProductForm) => {
    const payload = addProductRequest(
      values,
      availabilityForm,
      variationForm.variationData
    );

    setProductForm(values);
    callAddProductApi(payload);
  };

  const formikBag = useFormik<ProductForm>({
    initialValues: productForm,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: handleSubmit,
    validationSchema,
  });

  useUpdateEffect(() => {
    if (formikBag.isSubmitting && !formikBag.isValidating) {
      for (const path of Object.keys(flatten(formikBag.errors))) {
        formikBag.setFieldTouched(path, false, false);
      }
    }
  }, [
    formikBag.errors,
    formikBag.isSubmitting,
    formikBag.isValidating,
    formikBag.setFieldTouched,
  ]);

  useMount(callCategoryListApi);

  useUpdateEffect(() => {
    if (getAddProductResponse.response.status === RESPONSE_SUCCESS) {
      clearProductEntry();
      navigate(routes.SHOP_PRODUCTS);
    }
  }, [getAddProductResponse.response.status]);

  useUpdateEffect(() => {
    if (productForm.hasShippingData)
      formikBag.setFieldValue("hasShippingData", true);

    if (productForm.categoryId)
      formikBag.setFieldValue("categoryId", productForm.categoryId);
  }, [productForm.hasShippingData, productForm.categoryId]);

  const navigation: ProductNewNavigation = {
    onBack: useCallback(() => {
      goBack();
    }, [goBack]),
    onCategory: useCallback(() => {
      navigate(routes.CHOOSE_CATEGORY);
    }, [navigate]),
    onShipping: useCallback(() => {
      navigate(routes.SHIPPING_DETAILS);
    }, [navigate]),
    onVariation: useCallback(() => {
      navigate(routes.ADD_VARIATION);
    }, [navigate]),
    onWholesale: useCallback(() => {
      navigate(routes.ADD_WHOLESALE);
    }, [navigate]),
  };

  const sheetRefs: ProductNewSheetRefs = {
    status: () => productStatusRef.current?.open(),
    availability: () => availabilityRef.current?.open(),
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <ProductNewTemplate
        navigation={navigation}
        sheetRefs={sheetRefs}
        statusColor={statusColor}
        statusValue={statusValue}
      />

      <ProductStatus sheetRef={productStatusRef} />
      <ProductAvailability sheetRef={availabilityRef} />
    </FormikContext.Provider>
  );
};

export default ProductNewScreen;
