/**
 *
 * ShopEditAddress
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useMemoizedSelector, useMount, useUpdateEffect } from "@app/hooks";
import { COMMON } from "@app/constants";
import {
  actions as shopActions,
  selectors as ShopSelectors,
} from "@app/redux/shop";
import {
  actions as locationActions,
  selectors as locationSelectors,
} from "@app/redux/location";
import {
  BarangayRequest,
  CitiesRequest,
  ProvinceRequest,
} from "@app/redux/location/models";
import { ShopAddressForm } from "@app/redux/shop/models";
import ShopEditAddressTemplate from "@app/templates/ShopEditAddress";
import routes from "@app/navigators/routes";

import type { LocationChoices, PickerDisable, PickerValues } from "./types";
import { setPickerData } from "./config";
import ShopAddressValidationSchema from "./validation";

const ShopEditAddressScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();
  const { INIT_PICKER_VALUE } = COMMON;

  const shopAddressForm = useMemoizedSelector(ShopSelectors.getShopAddressForm);

  const actions = {
    callRegionApi: useCallback(
      () => dispatch(locationActions.callRegionApi.request()),
      [dispatch]
    ),
    callProvinceApi: useCallback(
      (request: ProvinceRequest) =>
        dispatch(locationActions.callProvinceApi.request(request)),
      [dispatch]
    ),
    callCitiesApi: useCallback(
      (request: CitiesRequest) =>
        dispatch(locationActions.callCitiesApi.request(request)),
      [dispatch]
    ),
    callBarangayApi: useCallback(
      (request: BarangayRequest) =>
        dispatch(locationActions.callBarangayApi.request(request)),
      [dispatch]
    ),
    setShopAddressForm: useCallback(
      (values: ShopAddressForm) =>
        dispatch(shopActions.setShopAddressForm(values)),
      [dispatch]
    ),
  };

  const selectors = {
    regionResponse: useMemoizedSelector(locationSelectors.getRegionResponse),
    citiesResponse: useMemoizedSelector(locationSelectors.getCitiesResponse),
    provinceResponse: useMemoizedSelector(
      locationSelectors.getProvinceResponse
    ),
    barangayResponse: useMemoizedSelector(
      locationSelectors.getBarangayResponse
    ),
  };

  const handleSubmit = (values: ShopAddressForm) => {
    actions.setShopAddressForm({ ...values });
    navigate(routes.SHOP_ADDRESS);
  };

  const formikBag = useFormik({
    initialValues: shopAddressForm,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: ShopAddressValidationSchema,
    onSubmit: handleSubmit,
  });

  useMount(() => {
    if (shopAddressForm.region !== INIT_PICKER_VALUE) {
      formikBag.setFieldValue("region", shopAddressForm.region);
    } else {
      actions.callRegionApi();
    }
  });

  useUpdateEffect(() => {
    if (formikBag.values.region !== INIT_PICKER_VALUE) {
      const request: ProvinceRequest = {
        regionId: formikBag.values.region,
      };

      actions.callProvinceApi(request);
    }

    if (formikBag.values.region === null && formikBag.touched.region) {
      formikBag.setFieldValue("province", INIT_PICKER_VALUE);
      formikBag.setFieldValue("cities", INIT_PICKER_VALUE);
      formikBag.setFieldValue("barangay", INIT_PICKER_VALUE);
    }
  }, [formikBag.values.region]);

  useUpdateEffect(() => {
    if (formikBag.values.province !== INIT_PICKER_VALUE) {
      const request: CitiesRequest = {
        provinceId: formikBag.values.province,
      };

      actions.callCitiesApi(request);
    }

    if (formikBag.values.province === null && formikBag.touched.province) {
      formikBag.setFieldValue("cities", INIT_PICKER_VALUE);
      formikBag.setFieldValue("barangay", INIT_PICKER_VALUE);
    }
  }, [formikBag.values.province]);

  useUpdateEffect(() => {
    if (formikBag.values.cities !== INIT_PICKER_VALUE) {
      const request: BarangayRequest = {
        cityId: formikBag.values.cities,
      };

      actions.callBarangayApi(request);
    }

    if (formikBag.values.cities === null && formikBag.touched.cities) {
      formikBag.setFieldValue("barangay", INIT_PICKER_VALUE);
    }
  }, [formikBag.values.cities]);

  const pickerValues: PickerValues = {
    regions: setPickerData(selectors.regionResponse),
    province: setPickerData(selectors.provinceResponse),
    cities: setPickerData(selectors.citiesResponse),
    barangay: setPickerData(selectors.barangayResponse),
  };

  const disabledCondition = (key: LocationChoices) => {
    return (
      formikBag.values[key] === INIT_PICKER_VALUE ||
      formikBag.values[key] === undefined
    );
  };

  const pickerDisable: PickerDisable = {
    regions: false,
    province: disabledCondition("region"),
    cities: disabledCondition("province"),
    barangay: disabledCondition("cities"),
  };

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <FormikProvider value={formikBag}>
      <ShopEditAddressTemplate
        onBack={handleBack}
        pickerValues={pickerValues}
        pickerDisable={pickerDisable}
      />
    </FormikProvider>
  );
};

export default ShopEditAddressScreen;
