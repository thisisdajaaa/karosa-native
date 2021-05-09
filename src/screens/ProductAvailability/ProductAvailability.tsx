/**
 *
 * ProductAvailability
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { AvailabilityForm } from "@app/redux/shop/models";
import BottomSheet from "@app/molecules/BottomSheet";
import ProductAvailabilityTemplate from "@app/templates/ProductAvailability";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";

const ProductAvailabilityScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const dispatch = useDispatch();

  const setProductAvailability = useCallback(
    (value: AvailabilityForm) => dispatch(actions.setAvailabilityForm(value)),
    [dispatch]
  );

  const availabilityForm = useMemoizedSelector(selectors.getAvailabilityForm);

  const handleSubmit = (values: AvailabilityForm) => {
    setProductAvailability({ ...values });
    sheetRef.current?.close();
  };

  const formikBag = useFormik({
    initialValues: availabilityForm,
    onSubmit: handleSubmit,
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
        <ProductAvailabilityTemplate />
      </BottomSheet>
    </FormikContext.Provider>
  );
};

export default ProductAvailabilityScreen;
