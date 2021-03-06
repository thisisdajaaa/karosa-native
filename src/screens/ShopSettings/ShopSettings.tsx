/**
 *
 * ShopSettings
 * @format
 *
 */

import React, { FC, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { FormikProvider, useFormik } from "formik";
import { selectors } from "@app/redux/shop";
import { useMemoizedSelector } from "@app/hooks";
import ShopSettingsTemplate from "@app/templates/ShopSettings";
import ShopStatus from "@app/screens/ShopStatus";

const ShopSettings: FC = () => {
  const shopStatusRef = useRef<RBSheet>(null);

  const shopSettingsForm = useMemoizedSelector(selectors.getShopSettings);

  const handleSubmit = () => {
    alert("g");
  };

  const formikBag = useFormik({
    initialValues: shopSettingsForm,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
  });

  return (
    <FormikProvider value={formikBag}>
      <ShopSettingsTemplate sheetRef={shopStatusRef} />
      <ShopStatus sheetRef={shopStatusRef} />
    </FormikProvider>
  );
};

export default ShopSettings;
