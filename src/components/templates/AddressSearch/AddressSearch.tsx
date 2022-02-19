/**
 *
 * AddressSearchTemplate
 * @format
 *
 */

import React, {
  FC,
  LegacyRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import type { PropsType } from "./types";
import AddressSearchTemplateStyles from "./styles";
import { Platform, SafeAreaView, View } from "react-native";
import Header from "@app/molecules/Header";
import { DIMENS, theme } from "@app/styles";
import { useNavigation } from "@react-navigation/native";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import MapView, { Camera, Marker, Region } from "react-native-maps";
import Image from "@app/atoms/Image";
import Button from "@app/atoms/Button";
import routes from "@app/navigators/routes";
import { useMount } from "@app/hooks";
import Text from "@app/atoms/Text";
import { GOOGLE_PLACES_API_KEY } from "@env";
import Icon from "@app/atoms/Icon";

const AddressSearchTemplate: FC<PropsType> = (props) => {
  const { latitude, longitude, location } = props;
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

  const [place, setPlace] = useState({
    latitude: latitude,
    longitude: longitude,
    details: "",
  });

  const mapRef: LegacyRef<MapView> = useRef(null);
  const autocompleteRef = useRef<GooglePlacesAutocompleteRef>(null);

  useMount(() => {
    autocompleteRef.current?.setAddressText(location);
  });

  const onInitialMapReady = (region: Region) => {
    Platform.OS === "ios"
      ? () => mapRef?.current?.animateToRegion(region, 1000)
      : mapRef?.current?.getCamera().then((cam: Camera) => {
          cam.zoom += 6;
          mapRef?.current?.animateCamera(cam, { duration: 1000 });
        });
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
            onRegionChangeComplete={async (_region) => {
              setRegion(_region);
              console.log(_region);
            }}
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
            disabled={!(place.latitude > 0 && place.longitude > 0)}
            onPress={() => {
              navigate("Stack", {
                screen: routes.ACCOUNTS_EDIT_ADDRESS,
                params: {
                  latitude: place.latitude,
                  longitude: place.longitude,
                  details: place.details ? place.details : location,
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
