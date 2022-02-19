/**
 *
 * AddressSearch
 * @format
 *
 */

import React, { FC, useCallback } from "react";

import type { AddressMainProps } from "./types";
import { actions, selectors } from "@app/redux/address";
import AddressSearchTemplate from "@app/templates/AddressSearch";
import { RouteProp, useRoute } from "@react-navigation/native";
import { GeocoderRequest } from "@app/redux/address/models";
import { useDispatch } from "react-redux";
import { useMemoizedSelector } from "@app/hooks";

const AddressSearch: FC = () => {
  const { params } = useRoute<RouteProp<AddressMainProps, "AddressLocation">>();

  const dispatch = useDispatch();

  const getGeocoderResponse = useMemoizedSelector(
    selectors.getGeocoderResponse
  ).response;

  const callGeocoderApi = useCallback(
    (values: GeocoderRequest) =>
      dispatch(actions.callGeocoderApi.request(values)),
    [dispatch]
  );

  return (
    <AddressSearchTemplate
      routeParams={params}
      handleGeocoder={callGeocoderApi}
      formattedAddress={getGeocoderResponse.results[0]?.formatted_address}
    />
  );
};

export default AddressSearch;
