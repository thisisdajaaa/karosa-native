/**
 *
 * AddressMain
 * @format
 *
 */

import AddressMainTemplate from "@app/components/templates/AddressMainTemplate";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/address";
import { UserLocation } from "@app/redux/address/models";

import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import AddressMainConfig from './config';
import type { PropsType } from "./types";
// import AddressMainStyles from './styles';
import * as Location from "expo-location";
const AddressMain: FC<PropsType> = (props) => {
  const {} = props;
  const dispatch = useDispatch();
  const userLocationAddress = useMemoizedSelector(selectors.getUserLocation);
  const addressList = useMemoizedSelector(selectors.getAddressList);
  const action = {
    setUserLocation: useCallback(
      (values: UserLocation) => dispatch(actions.setUserLocation(values)),
      [dispatch]
    ),
  };

  useEffect(() => {
    handlelocation();
  });

  const handlelocation = () => {
    Location.installWebGeolocationPolyfill();
    navigator.geolocation.getCurrentPosition((pos) => {
      action.setUserLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  };

  return <AddressMainTemplate />;
};

export default AddressMain;
