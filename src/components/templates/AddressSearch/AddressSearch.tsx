/**
 *
 * AddressSearchTemplate
 * @format
 *
 */

import React, {
  FC,
  LegacyRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

// import AddressSearchTemplateConfig from "./config";
import type { PropsType } from "./types";
import AddressSearchTemplateStyles from "./styles";
import { View } from "react-native";
import Header from "@app/components/molecules/Header";
import { DIMENS, theme } from "@app/styles";
import { useNavigation } from "@react-navigation/native";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import Button from "@app/atoms/Button";
import routes from "@app/navigators/routes";
import { useDispatch } from "react-redux";
import { NewAddressForm } from "@app/redux/address/models";
import { actions, selectors } from "@app/redux/address";
import { useMemoizedSelector } from "@app/hooks";

const AddressSearchTemplate: FC<PropsType> = (props) => {
  const { latitude, longitude } = props;
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const ASPECT_RATIO = DIMENS.screenWidth / DIMENS.screenHeight;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const newAddressForm = useMemoizedSelector(selectors.getNewAddressForm);

  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const [region, setRegion] = useState(initialRegion);

  const [place, setPlace] = useState({
    latitude: latitude,
    longitude: longitude,
    details: "",
  });

  const mapRef: LegacyRef<MapView> = useRef(null);
  const autocompleteRef = useRef<GooglePlacesAutocompleteRef>(null);

  // temp
  // useLayoutEffect(() => {
  //   autocompleteRef.current?.setAddressText(newAddressForm.coords.location);
  // }, []);

  const action = {
    setNewAddressForm: useCallback(
      (values: NewAddressForm) => dispatch(actions.setNewAddress(values)),
      [dispatch]
    ),
  };

  const GOOGLE_PLACES_API_KEY = "AIzaSyDgsrWcoqhdVaCTBumGvR-9OhhdSWp6sXg";

  return (
    <View style={{ position: "relative", flexGrow: 1 }}>
      <Header
        barStyle="light-content"
        placement="left"
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={
          <GooglePlacesAutocomplete
            placeholder="Search"
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
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
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
            }}
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
              listView: { backgroundColor: "white" },
            }}
          />
        }
      />

      <View style={AddressSearchTemplateStyles.mainContainer}>
        <MapView
          ref={mapRef}
          style={AddressSearchTemplateStyles.map}
          region={region}
          provider="google"
          minZoomLevel={18}
        >
          <Marker
            draggable
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            onDragEnd={(e) => {
              setRegion({
                ...region,
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          />
        </MapView>
      </View>
      <View style={AddressSearchTemplateStyles.buttonContainer}>
        <Button
          title="Confirm"
          buttonStyle={AddressSearchTemplateStyles.buttonPrimary}
          titleStyle={{ fontSize: 16 }}
          disabled={!(place.latitude > 0 && place.longitude > 0)}
          onPress={() => {
            action.setNewAddressForm({
              ...newAddressForm,
              coords: {
                latitude: place.latitude,
                longitude: place.longitude,
                location: place.details,
              },
            });
            navigate("Stack", {
              screen: routes.ACCOUNTS_EDIT_ADDRESS,
              params: {
                latitude: place.latitude,
                longitude: place.longitude,
                details: place.details,
              },
            });
          }}
        />
      </View>
    </View>
  );
};

export default AddressSearchTemplate;
