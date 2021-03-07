/**
 *
 * ShopSettings
 * @format
 *
 */

import React, { FC, useCallback, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { FormikProvider, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { selectors } from "@app/redux/shop";
import { useMemoizedSelector } from "@app/hooks";
import ShopSettingsTemplate from "@app/templates/ShopSettings";
import ShopStatus from "@app/screens/ShopStatus";
import ShopDelete from "@app/screens/ShopDelete";
import routes from "@app/navigators/routes";

import type { ShopMainNavigation } from "./types";
import { statusInformation } from "./config";

const ShopSettings: FC = () => {
  const shopStatusRef = useRef<RBSheet>(null);
  const shopDeleteRef = useRef<RBSheet>(null);

  const { navigate, goBack } = useNavigation();

  const shopSettingsForm = useMemoizedSelector(selectors.getShopSettings);

  const { statusValue, statusColor } = statusInformation(
    shopSettingsForm.status
  );

  const handleSubmit = () => {
    alert("g");
  };

  const formikBag = useFormik({
    initialValues: shopSettingsForm,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
  });

  const navigation: ShopMainNavigation = {
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
      />
      <ShopStatus sheetRef={shopStatusRef} />
      <ShopDelete sheetRef={shopDeleteRef} />
    </FormikProvider>
  );
};

export default ShopSettings;
