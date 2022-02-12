/**
 *
 * ShopSettings
 * @format
 *
 */

import React, { FC, useCallback, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ShopSettingsForm } from "@app/redux/shop/models";
import { useNavigation } from "@react-navigation/native";
import { selectors, actions } from "@app/redux/shop";
import { useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import ShopSettingsTemplate from "@app/templates/ShopSettings";
import ShopStatus from "@app/screens/ShopStatus";
import ShopDelete from "@app/screens/ShopDelete";
import routes from "@app/navigators/routes";

import type { ShopSettingsNavigation } from "./types";
import { statusInformation } from "./config";
import ShopSettingsValidationSchema from "./validation";

const ShopSettingsScreen: FC = () => {
  const dispatch = useDispatch();

  const shopStatusRef = useRef<RBSheet>(null);
  const shopDeleteRef = useRef<RBSheet>(null);

  const { navigate, goBack } = useNavigation();

  const shopSettingsForm = useMemoizedSelector(selectors.getShopSettings);

  const setShopSettingsForm = useCallback(
    (values: ShopSettingsForm) => dispatch(actions.setShopSettings(values)),
    [dispatch]
  );

  const { statusValue, statusColor } = statusInformation(
    shopSettingsForm.status
  );

  const handleSubmit = (values: ShopSettingsForm) => {
    setShopSettingsForm({ ...values });
    navigate(routes.SHOP_MAIN);
  };

  const formikBag = useFormik<ShopSettingsForm>({
    initialValues: shopSettingsForm,
    validateOnChange: true,
    validateOnBlur: false,
    validationSchema: ShopSettingsValidationSchema,
    onSubmit: handleSubmit,
  });

  useUpdateEffect(() => {
    if (shopSettingsForm.hasPayment)
      formikBag.setFieldValue("hasPayment", true);
  }, [shopSettingsForm.hasPayment]);

  const navigation: ShopSettingsNavigation = {
    onBack: useCallback(() => {
      goBack();
    }, [goBack]),
    onAddress: useCallback(() => {
      navigate(routes.SHOP_ADDRESS);
    }, [navigate]),
    onPayment: useCallback(() => {
      navigate(routes.SHOP_PAYMENT);
    }, [navigate]),
  };

  return (
    <FormikProvider value={formikBag}>
      <ShopSettingsTemplate
        shopStatusRef={shopStatusRef}
        shopDeleteRef={shopDeleteRef}
        statusColor={statusColor}
        statusValue={statusValue}
        navigation={navigation}
        submitForm={formikBag.submitForm}
      />
      <ShopStatus sheetRef={shopStatusRef} />
      <ShopDelete sheetRef={shopDeleteRef} />
    </FormikProvider>
  );
};

export default ShopSettingsScreen;
