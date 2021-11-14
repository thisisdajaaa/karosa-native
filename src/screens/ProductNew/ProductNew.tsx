/**
 *
 * ProductNew
 * @format
 *
 */

import React, { FC, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import RBSheet from "react-native-raw-bottom-sheet";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { ProductForm } from "@app/redux/shop/models";
import ProductNewTemplate from "@app/templates/ProductNew";
import routes from "@app/navigators/routes";
import ProductStatus from "@app/screens/ProductStatus";
import ProductAvailability from "@app/screens/ProductAvailability";
import ProductMeasurement from "@app/screens/ProductMeasurement";

import type { ProductNewNavigation, ProductNewSheetRefs } from "./types";
import { statusInformation } from "./config";

import validationSchema from "./validation";

const ProductNewScreen: FC = () => {
  const dispatch = useDispatch();

  const productStatusRef = useRef<RBSheet>(null);
  const availabilityRef = useRef<RBSheet>(null);
  const measurementRef = useRef<RBSheet>(null);

  const { goBack, navigate } = useNavigation();

  const clearProductEntry = useCallback(
    () => dispatch(actions.clearProductEntry()),
    [dispatch]
  );

  const setProductForm = useCallback(
    (values: ProductForm) => dispatch(actions.setProductForm(values)),
    [dispatch]
  );

  const callAddProductApi = useCallback(() => {
    dispatch(
      actions.callAddProductApi.request({
        name: "Sample Product",
        categoryId: 1,
        upComingHarvest: true,
        estimatedAvailableDate: "2021-02-02",
        bestBefore: "2021-02-02",
        productStatus: 1,
        description: "This is a sample product",
        variationOptions: [
          {
            name: "Color",
            options: ["Blue", "Red"],
          },
          {
            name: "Size",
            options: ["Small", "Large"],
          },
        ],
        variations: [
          {
            name: "Color",
            option: "Blue",
            price: 10,
            stock: 10,
            weight: 10,
          },
          {
            name: "Color",
            option: "Red",
            price: 20,
            stock: 20,
            weight: 20,
          },
          {
            name: "Size",
            option: "Small",
            price: 30,
            stock: 30,
            weight: 30,
          },
          {
            name: "Size",
            option: "Large",
            price: 40,
            stock: 40,
            weight: 40,
          },
        ],
      })
    );
  }, [dispatch]);

  const productForm = useMemoizedSelector(selectors.getProductForm);
  const asd = useMemoizedSelector(selectors.getAddProductResponse);

  console.log(asd.response.status);
  const { statusValue, statusColor } = statusInformation(productForm.status);

  const handleSubmit = (values: ProductForm) => {
    setProductForm(values);
    callAddProductApi();
    // clearProductEntry();
    navigate(routes.SHOP_PRODUCTS);
  };

  const formikBag = useFormik({
    initialValues: productForm,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: handleSubmit,
    validationSchema,
  });

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
    measurement: () => measurementRef.current?.open(),
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
      <ProductMeasurement sheetRef={measurementRef} />
    </FormikContext.Provider>
  );
};

export default ProductNewScreen;
