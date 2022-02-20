/**
 *
 * AddressSearchTemplate
 * @format
 *
 */

import React, { FC, LegacyRef, useRef, useState } from "react";

import type { PropsType } from "./types";
import AddressSearchTemplateStyles from "./styles";
import { Platform, View } from "react-native";
import Header from "@app/molecules/Header";
import { DIMENS, theme } from "@app/styles";
import { useNavigation } from "@react-navigation/native";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import MapView, { Camera, Region } from "react-native-maps";
import Button from "@app/atoms/Button";
import routes from "@app/navigators/routes";
import { useMount, useUpdateEffect } from "@app/hooks";
import Text from "@app/atoms/Text";
import { GOOGLE_PLACES_API_KEY } from "@env";
import Icon from "@app/atoms/Icon";
import { debounce } from "lodash";
import { GeocoderRequest } from "@app/redux/address/models";

const AddressSearchTemplate: FC<PropsType> = (props) => {
  const { routeParams, handleGeocoder, formattedAddress } = props;
  const { latitude, longitude, id } = routeParams;
  const { goBack, navigate } = useNavigation();

  const ASPECT_RATIO = DIMENS.screenWidth / DIMENS.screenHeight;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
    Platform.OS === "ios"
      ? () => mapRef?.current?.animateToRegion(_region, 1000)
      : mapRef?.current?.getCamera().then((cam: Camera) => {
          cam.zoom += 6;
          mapRef?.current?.animateCamera(cam, { duration: 1000 });
        });
  };

  const debouncedGeocoder = debounce(
    (_region: Region) => onGeocode(_region.latitude, _region.longitude),
    500
  );

  const handleRegionChange = (_region: Region) => {
    setRegion(_region);

    debouncedGeocoder(_region);
  };

  return (
    <>
      <Header
        placement="left"
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
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
            debounce={200}
            fetchDetails
            onPress={(data, details) => {
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

              mapRef?.current?.animateToRegion(_region, 1000);
            }}
            renderRow={(rowData) => {
              const { main_text, secondary_text } =
                rowData.structured_formatting;

              return (
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    group="accountSettings"
                    name="outlineAddress"
                    width={20}
                    height={20}
                    extraStyle={{ marginRight: 8 }}
                  />
                  <Text text={`${main_text}, ${secondary_text}`} />
                </View>
              );
            }}
            enablePoweredByContainer={false}
            styles={{
              textInput: {
                width: "100%",
                backgroundColor: theme.colors.light5,
              },
              container: {
                flex: 0,
                width: "100%",
                top: -8,
              },
              listView: {
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#ECECEC",
              },
            }}
          />
        }
      />

      <View style={{ flex: 1 }}>
        <View style={AddressSearchTemplateStyles.mainContainer}>
          <MapView
            ref={mapRef}
            style={AddressSearchTemplateStyles.map}
            initialRegion={region}
            provider="google"
            showsUserLocation
            zoomEnabled
            minZoomLevel={19}
            onMapReady={() => onInitialMapReady(initialRegion)}
            onRegionChangeComplete={handleRegionChange}
          />
          <View
            style={{
              left: "50%",
              marginLeft: -24,
              marginTop: -48,
              position: "absolute",
              zIndex: 3,
              top: "50%",
            }}
          >
            <Icon
              group="accountSettings"
              name="mapPin"
              width={48}
              height={48}
            />
          </View>
        </View>
        <View style={AddressSearchTemplateStyles.buttonContainer}>
          <Button
            title="Confirm"
            buttonStyle={AddressSearchTemplateStyles.buttonPrimary}
            titleStyle={{ fontSize: 16 }}
            disabled={!formattedAddress || isFocused}
            onPress={() => {
              navigate("Stack", {
                screen: routes.ACCOUNTS_EDIT_ADDRESS,
                params: {
                  id,
                  latitude: region.latitude,
                  longitude: region.longitude,
                  location: place.details ? place.details : formattedAddress,
                },
              });
            }}
          />
        </View>
      </View>
    </>
  );
};

export default AddressSearchTemplate;
