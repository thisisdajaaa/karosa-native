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
import { isEqual } from "lodash";
import { initNewAddress } from "@app/redux/address/data";
import { ShopSettingsForm } from "@app/redux/shop/models";
import { useNavigation } from "@react-navigation/native";
import { selectors, actions } from "@app/redux/shop";
import { selectors as addressSelector } from "@app/redux/address";
import {
  useFetchCoordinates,
  useMemoizedSelector,
  useUpdateEffect,
} from "@app/hooks";
import ShopSettingsTemplate from "@app/templates/ShopSettings";
import ShopStatus from "@app/screens/ShopStatus";
import ShopDelete from "@app/screens/ShopDelete";
import routes from "@app/navigators/routes";

import type { ShopSettingsNavigation } from "./types";
import { statusInformation } from "./config";
import ShopSettingsValidationSchema from "./validation";

const ShopSettingsScreen: FC = () => {
  useFetchCoordinates();

  const dispatch = useDispatch();

  const shopStatusRef = useRef<RBSheet>(null);
  const shopDeleteRef = useRef<RBSheet>(null);

  const { navigate, goBack } = useNavigation();

  const shopSettingsForm = useMemoizedSelector(selectors.getShopSettings);
  const shopAddressForm = useMemoizedSelector(selectors.getShopAddressForm);
  const userCoordinates = useMemoizedSelector(
    addressSelector.getUserCoordinates
  );

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

  const handleNewAddress = () => {
    navigate("Stack", {
      screen: routes.ACCOUNTS_SEARCH_ADDRESS,
      params: {
        mode: "Shop",
        latitude: userCoordinates.latitude,
        longitude: userCoordinates.longitude,
      },
    });
  };

  useUpdateEffect(() => {
    if (shopSettingsForm.hasPayment)
      formikBag.setFieldValue("hasPayment", true);
  }, [shopSettingsForm.hasPayment]);

  const navigation: ShopSettingsNavigation = {
    onBack: useCallback(() => {
      goBack();
    }, [goBack]),
    onPayment: useCallback(() => {
      navigate(routes.SHOP_PAYMENT);
    }, [navigate]),
    onAddress: useCallback(() => {
      navigate("Stack", {
        screen: routes.ACCOUNTS_EDIT_ADDRESS,
        params: {
          id: shopAddressForm.id,
          mode: "Shop",
          latitude: shopAddressForm.coords.latitude,
          longitude: shopAddressForm.coords.longitude,
          location: shopAddressForm.coords.location,
        },
      });
    }, [navigate, shopAddressForm]),
  };

  const shopSettingRefs = {
    shopStatusRef: shopStatusRef,
    shopDeleteRef: shopDeleteRef,
  };

  const shopFieldsData = {
    statusColor,
    statusValue,
    hasAddress: !isEqual(shopAddressForm, initNewAddress),
    addressDetails: shopAddressForm,
  };

  return (
    <FormikProvider value={formikBag}>
      <ShopSettingsTemplate
        shopSettingRefs={shopSettingRefs}
        shopFieldsData={shopFieldsData}
        navigation={navigation}
        submitForm={formikBag.submitForm}
        handleNewAddress={handleNewAddress}
      />
      <ShopStatus sheetRef={shopStatusRef} />
      <ShopDelete sheetRef={shopDeleteRef} />
    </FormikProvider>
  );
};

export default ShopSettingsScreen;
