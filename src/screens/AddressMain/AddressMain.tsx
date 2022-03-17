/**
 *
 * AddressMain
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions, selectors } from "@app/redux/address";
import { NewAddressForm } from "@app/redux/address/models";
import { useMemoizedSelector, useFetchCoordinates } from "@app/hooks";
import AddressMainTemplate from "@app/templates/AddressMain";
import routes from "@app/navigators/routes";

const AddressMain: FC = () => {
  useFetchCoordinates();

  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const deleteAddress = useCallback(
    (id: string | number[] | undefined) => dispatch(actions.deleteAddress(id)),
    [dispatch]
  );

  const userCoordinates = useMemoizedSelector(selectors.getUserCoordinates);
  const addressList = useMemoizedSelector(selectors.getUserAddressList);

  const handleEditAddress = (address: NewAddressForm) => {
    navigate("Stack", {
      screen: routes.ACCOUNTS_EDIT_ADDRESS,
      params: {
        id: address.id,
        mode: "User",
        latitude: address.coords.latitude,
        longitude: address.coords.longitude,
        location: address.coords.location,
      },
    });
  };

  const handleNewAddress = () => {
    navigate("Stack", {
      screen: routes.ACCOUNTS_SEARCH_ADDRESS,
      params: {
        mode: "User",
        latitude: userCoordinates.latitude,
        longitude: userCoordinates.longitude,
      },
    });
  };

  return (
    <AddressMainTemplate
      addressList={addressList}
      handleBack={goBack}
      handleEditAddress={handleEditAddress}
      handleNewAddress={handleNewAddress}
      handleDelete={deleteAddress}
    />
  );
};

export default AddressMain;
