/**
 *
 * AddressEdit
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import uuid from "react-native-uuid";
import AddressEditTemplate from "@app/templates/AddressEdit";
import { AddressMainParams } from "@app/screens/AddressSearch/types";
import { useMemoizedSelector, useMount } from "@app/hooks";
import { actions, selectors } from "@app/redux/address";
import {
  actions as shopActions,
  selectors as shopSelectors,
} from "@app/redux/shop";
import { NewAddressForm } from "@app/redux/address/models";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const AddressEdit: FC = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const setUserAddressList = useCallback(
    (values: NewAddressForm[]) => dispatch(actions.setUserAddressList(values)),
    [dispatch]
  );

  const setShopAddressForm = useCallback(
    (values: NewAddressForm) =>
      dispatch(shopActions.setShopAddressForm(values)),
    [dispatch]
  );

  const { params } =
    useRoute<RouteProp<AddressMainParams, "AddressLocation">>();

  const newAddressForm = useMemoizedSelector(selectors.getNewAddressForm);
  const getUserAddressList = useMemoizedSelector(selectors.getUserAddressList);
  const shopAddressForm = useMemoizedSelector(shopSelectors.getShopAddressForm);

  const onEditAddress = () => {
    if (!params.id) goBack();

    navigate("Stack", {
      screen: routes.ACCOUNTS_SEARCH_ADDRESS,
      id: params.id,
      mode: params.mode,
      latitude: params.latitude,
      longitude: params.longitude,
      location: params.location,
    });
  };

  const getUserValues = (): NewAddressForm => {
    const foundAddress = getUserAddressList.find(
      (value) => value.id === params.id
    );

    if (!foundAddress) return { ...newAddressForm };

    return {
      ...foundAddress,
    };
  };

  const getShopValues = (): NewAddressForm => {
    return {
      ...shopAddressForm,
    };
  };

  const initialValues =
    params.mode === "User" ? getUserValues() : getShopValues();

  useMount(() => {
    const hasLatLng = params.latitude && params.longitude && params.location;

    hasLatLng
      ? formikBag.setFieldValue("hasLatLng", true)
      : formikBag.setFieldValue("hasLatLng", false);
  });

  const onUpdateUserAddress = (values: NewAddressForm) => {
    const updatedAddress: NewAddressForm[] = getUserAddressList.map((value) => {
      if (value.id === params.id) {
        return {
          ...values,
          coords: {
            latitude: params.latitude,
            longitude: params.longitude,
            location: params.location,
          },
        };
      }

      return {
        ...value,
        isDefault: values.isDefault && false,
      };
    });

    setUserAddressList(updatedAddress);
  };

  const onAddUserAddress = (values: NewAddressForm) => {
    const newAddress: NewAddressForm = {
      ...values,
      id: uuid.v4(),
      coords: {
        latitude: params.latitude,
        longitude: params.longitude,
        location: params.location,
      },
    };

    let clonedAddressList: NewAddressForm[] = [...getUserAddressList];

    if (values.isDefault) {
      clonedAddressList = [...getUserAddressList].map((value) => {
        return {
          ...value,
          isDefault: false,
        };
      });
    }

    const addressList: NewAddressForm[] = [...clonedAddressList, newAddress];

    setUserAddressList(addressList);
  };

  const onAddShopAddress = (values: NewAddressForm) => {
    const newAddress: NewAddressForm = {
      ...values,
      id: uuid.v4(),
      coords: {
        latitude: params.latitude,
        longitude: params.longitude,
        location: params.location,
      },
    };

    setShopAddressForm(newAddress);
  };

  console.log(params);

  const handleSubmit = (values: NewAddressForm) => {
    switch (params.mode) {
      case "User":
        params.id ? onUpdateUserAddress(values) : onAddUserAddress(values);
        navigate(routes.ACCOUNTS_ADDRESS);
        break;
      case "Shop":
        onAddShopAddress(values);
        navigate(routes.SHOP_SETTINGS);
        break;
      default:
        break;
    }
  };

  const formikBag = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema,
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <AddressEditTemplate
        routeParams={params}
        handleEditAddress={onEditAddress}
        handleBack={goBack}
      />
    </FormikContext.Provider>
  );
};

export default AddressEdit;
