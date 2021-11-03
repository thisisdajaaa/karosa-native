/**
 *
 * AddressSearchTemplate
 * @format
 *
 */

import React, { FC, LegacyRef, useCallback, useRef, useState } from "react";

// import AddressSearchTemplateConfig from "./config";
import type { PropsType } from "./types";
import AddressSearchTemplateStyles from "./styles";
import { View, Animated } from "react-native";
import Header from "@app/components/molecules/Header";
import { theme } from "@app/styles";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Camera, Marker } from "react-native-maps";
import Button from "@app/atoms/Button";
import routes from "@app/navigators/routes";
import Icon from "@app/atoms/Icon";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { NewAddressForm } from "@app/redux/address/models";
import { actions } from "@app/redux/address";
import { initNewAddress } from "@app/redux/address/data";
const AddressSearchTemplate: FC<PropsType> = (props) => {
  const { latitude, longitude, googleAutoCompleteProps } = props;
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [place, setPlace] = useState({
    latitude: latitude,
    longitude: longitude,
    details: "",
  });
  const mapRef: LegacyRef<MapView> = useRef(null);

  const action = {
    setNewAddressForm: useCallback(
      (values: NewAddressForm) => dispatch(actions.setNewAddress(values)),
      [dispatch]
    ),
  };

  const onZoomInPress = () => {
    mapRef?.current?.getCamera().then((cam: Camera) => {
      cam.zoom += 10;
      mapRef?.current?.animateCamera(cam);
    });
  };

  const GOOGLE_PLACES_API_KEY = "AIzaSyB2P8TWkc09Z83VZuYz_M_qh62r2s3c-p4";

  return (
    <View style={AddressSearchTemplateStyles.mainContainer}>
      <Header
        barStyle="light-content"
        placement={"left"}
        leftComponent={
          <TouchableWithoutFeedback
            onPress={goBack}
            style={AddressSearchTemplateStyles.touchableStyle}>
            <Icon
              group="accountSettings"
              name={"arrow"}
              width={20}
              height={20}
            />
          </TouchableWithoutFeedback>
        }
        containerStyle={AddressSearchTemplateStyles.headerContainer}
        centerComponent={
          <GooglePlacesAutocomplete
            placeholder={googleAutoCompleteProps?.placeholder || "Search"}
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
              components: "country:ph",
              location: `${region.latitude}, ${region.longitude}`,
            }}
            fetchDetails={true}
            onPress={(data, details) => {
              setRegion({
                latitude: details?.geometry.location.lat || 0,
                longitude: details?.geometry.location.lng || 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
              setPlace({
                latitude: details?.geometry.location.lat || 0,
                longitude: details?.geometry.location.lng || 0,
                details:
                  data.description.split(",")[0] +
                  "," +
                  data.description.split(",")[1] +
                  "," +
                  data.description.split(",")[2],
              });

              if (place.latitude > 0 && place.longitude > 0) {
                onZoomInPress();
              }
            }}
            styles={{
              textInput: {
                width: "100%",
                backgroundColor: theme.colors.light5,
              },
              container: {
                width: "100%",
                maxWidth: "100%",
                height: "100%",
              },
              listView: { backgroundColor: "white", width: "100%" },
            }}
          />
        }
      />

      <View>
        <MapView
          ref={mapRef}
          style={AddressSearchTemplateStyles.map}
          region={region}
          zoomEnabled={true}
          showsUserLocation
          showsCompass
          onMapReady={onZoomInPress}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            draggable={true}
          />
        </MapView>

        <View style={AddressSearchTemplateStyles.buttonBottomView}>
          <Button
            title={"Confirm"}
            buttonStyle={AddressSearchTemplateStyles.buttonPrimary}
            titleStyle={{ fontSize: 16 }}
            disabled={place.latitude > 0 && place.longitude > 0 ? false : true}
            onPress={() => {
              action.setNewAddressForm(initNewAddress);
              navigate("Stack", {
                screen: routes.ACCOUNTS_NEW_ADDRESS,
                params: {
                  latitude: place.latitude,
                  longitude: place.longitude,
                  details: place.details,
                },
              });
            }}></Button>
        </View>
      </View>
    </View>
  );
};

export default AddressSearchTemplate;
