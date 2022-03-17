/**
 *
 * AddressSearch
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { GOOGLE_PLACES_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { actions, selectors } from "@app/redux/address";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { GeocoderRequest } from "@app/redux/address/models";
import { useMemoizedSelector, useMount } from "@app/hooks";
import routes from "@app/navigators/routes";
import AddressSearchTemplate from "@app/templates/AddressSearch";

import type { AddressLocation, AddressMainParams } from "./types";

const AddressSearch: FC = () => {
  const { params } =
    useRoute<RouteProp<AddressMainParams, "AddressLocation">>();

  const dispatch = useDispatch();
  const { goBack, navigate } = useNavigation();

  const getGeocoderResponse = useMemoizedSelector(
    selectors.getGeocoderResponse
  ).response;

  const callGeocoderApi = useCallback(
    (values: GeocoderRequest) =>
      dispatch(actions.callGeocoderApi.request(values)),
    [dispatch]
  );

  useMount(() => {
    const queryParams: GeocoderRequest = {
      latlng: `${params.latitude},${params.longitude}`,
      key: GOOGLE_PLACES_API_KEY,
    };

    callGeocoderApi({ ...queryParams });
  });

  const onSaveAddress = (address: AddressLocation) => {
    const { id, latitude, location, longitude } = address;

    navigate("Stack", {
      screen: routes.ACCOUNTS_EDIT_ADDRESS,
      params: {
        id,
        mode: params.mode,
        latitude,
        longitude,
        location,
      },
    });
  };

  return (
    <AddressSearchTemplate
      routeParams={params}
      handleGeocoder={callGeocoderApi}
      handleSaveAddress={onSaveAddress}
      handleBack={goBack}
      formattedAddress={getGeocoderResponse.results[0]?.formatted_address}
    />
  );
};

export default AddressSearch;
