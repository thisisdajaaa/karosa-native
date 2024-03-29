/**
 *
 * AddressSearchTemplate
 * @format
 *
 */

import React, { FC, LegacyRef, useRef, useState } from "react";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import MapView, { Camera, Region } from "react-native-maps";
import { debounce } from "lodash";
import { View } from "react-native";
import { theme } from "@app/styles";
import { useMount, useUpdateEffect } from "@app/hooks";
import { GOOGLE_PLACES_API_KEY } from "@env";
import { GeocoderRequest } from "@app/redux/address/models";
import { getPlatform } from "@app/utils";
import type { AddressLocation } from "@app/screens/AddressSearch/types";
import Header from "@app/molecules/Header";
import Button from "@app/atoms/Button";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import {
  DURATION,
  ICON_SIZE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  MIN_ZOOM_LVL,
} from "./config";
import AddressSearchStyles from "./styles";

const AddressSearchTemplate: FC<PropsType> = (props) => {
  const {
    routeParams,
    handleGeocoder,
    handleBack,
    handleSaveAddress,
    formattedAddress,
  } = props;

  const { latitude, longitude, id } = routeParams;

  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const [region, setRegion] = useState<Region>(initialRegion);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [place, setPlace] = useState({
    latitude: latitude,
    longitude: longitude,
    details: "",
  });

  const mapRef: LegacyRef<MapView> = useRef(null);
  const autocompleteRef = useRef<GooglePlacesAutocompleteRef>(null);

  const isIOS = getPlatform.getInstance() === "ios";

  const onGeocode = (_latitutde: number, _longitutude: number) => {
    const params: GeocoderRequest = {
      key: GOOGLE_PLACES_API_KEY,
      latlng: `${_latitutde},${_longitutude}`,
    };

    handleGeocoder({ ...params });
  };

  useMount(() => onGeocode(latitude, longitude));

  useUpdateEffect(() => {
    if (!isFocused && formattedAddress) {
      autocompleteRef.current?.setAddressText(formattedAddress);

      setPlace((prev) => {
        return {
          ...prev,
          details: formattedAddress,
        };
      });
    }
  }, [formattedAddress, isFocused]);

  const onInitialMapReady = (_region: Region) => {
    isIOS
      ? () => mapRef?.current?.animateToRegion(_region, DURATION.HIGH)
      : mapRef?.current?.getCamera().then((cam: Camera) => {
          cam.zoom += 6;
          mapRef?.current?.animateCamera(cam, { duration: DURATION.HIGH });
        });
  };

  const debouncedGeocoder = debounce(
    (_region: Region) => onGeocode(_region.latitude, _region.longitude),
    DURATION.MID
  );

  const handleRegionChange = (_region: Region) => {
    setRegion(_region);

    debouncedGeocoder(_region);
  };

  const onSearchPress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    const latlng = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };

    const _region = {
      ...latlng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

    setRegion(_region);

    setPlace({
      ...latlng,
      details: data.description.split(",").join(","),
    });

    setIsFocused(false);

    mapRef?.current?.animateToRegion(_region, DURATION.HIGH);
  };

  const onConfirm = () => {
    const address: AddressLocation = {
      id,
      latitude: region.latitude,
      longitude: region.longitude,
      location: place.details ? place.details : formattedAddress,
    };

    handleSaveAddress(address);
  };

  const displaySearchRow = (rowData: GooglePlaceData) => {
    const { main_text, secondary_text } = rowData.structured_formatting;

    return (
      <View style={AddressSearchStyles.flexRow}>
        <Icon
          group="accountSettings"
          name="outlineAddress"
          width={ICON_SIZE.SM}
          height={ICON_SIZE.SM}
          extraStyle={AddressSearchStyles.outlineAddress}
        />
        <Text text={`${main_text}, ${secondary_text}`} />
      </View>
    );
  };

  return (
    <>
      <Header
        placement="left"
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: handleBack,
        }}
        centerComponent={
          <GooglePlacesAutocomplete
            ref={autocompleteRef}
            placeholder="Search Address"
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
              components: "country:ph",
              location: `${region.latitude}, ${region.longitude}`,
            }}
            textInputProps={{
              selectTextOnFocus: true,
              onFocus: () => setIsFocused(true),
              onBlur: () => setIsFocused(false),
            }}
            debounce={DURATION.LOW}
            fetchDetails
            onPress={onSearchPress}
            renderRow={displaySearchRow}
            enablePoweredByContainer={false}
            styles={{
              textInput: AddressSearchStyles.searchInput,
              container: AddressSearchStyles.searchContainer,
              listView: AddressSearchStyles.searchList,
            }}
          />
        }
      />

      <View style={AddressSearchStyles.container}>
        <View style={AddressSearchStyles.subContainer}>
          <MapView
            ref={mapRef}
            style={AddressSearchStyles.map}
            initialRegion={region}
            provider="google"
            showsUserLocation
            zoomEnabled
            minZoomLevel={MIN_ZOOM_LVL}
            onMapReady={() => onInitialMapReady(initialRegion)}
            onRegionChangeComplete={handleRegionChange}
          />
          <View style={AddressSearchStyles.pinContainer}>
            <Icon
              group="accountSettings"
              name="mapPin"
              width={ICON_SIZE.MD}
              height={ICON_SIZE.MD}
            />
          </View>
        </View>
        <View style={AddressSearchStyles.buttonContainer}>
          <Button
            title="Confirm"
            buttonStyle={AddressSearchStyles.buttonPrimary}
            titleStyle={AddressSearchStyles.txtButton}
            disabled={!formattedAddress || isFocused}
            onPress={onConfirm}
          />
        </View>
      </View>
    </>
  );
};

export default AddressSearchTemplate;
