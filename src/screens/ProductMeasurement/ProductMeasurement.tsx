/**
 *
 * ProductMeasurement
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import BottomSheet from "@app/molecules/BottomSheet";
import ProductMeasurementTemplate from "@app/templates/ProductMeasurement";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const ProductMeasurementScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const dispatch = useDispatch();

  const setProductMeasurement = useCallback(
    (value: string) => dispatch(actions.setProductMeasurement(value)),
    [dispatch]
  );

  const productMeasurement = useMemoizedSelector(
    selectors.getProductMeasurement
  );

  const handleSubmit = () => {
    setProductMeasurement(formikBag.values.measurement);
    sheetRef.current?.close();
  };

  const formikBag = useFormik({
    initialValues: { measurement: productMeasurement },
    onSubmit: handleSubmit,
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
        <ProductMeasurementTemplate />
      </BottomSheet>
    </FormikContext.Provider>
  );
};

export default ProductMeasurementScreen;
