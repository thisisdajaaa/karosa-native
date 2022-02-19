/**
 *
 * AddressMain
 * @format
 *
 */

import React, { FC } from "react";

import { ScrollView, View } from "react-native";
import Header from "@app/molecules/Header";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import { useNavigation } from "@react-navigation/core";
import routes from "@app/navigators/routes";
import { useMemoizedSelector } from "@app/hooks";
import { selectors } from "@app/redux/address";
import AddressMainStyles from "./styles";
import { ListItem } from "react-native-elements";
import Button from "@app/atoms/Button";
import { theme } from "@app/styles";

const AddressMainTemplate: FC = () => {
  const { goBack, navigate } = useNavigation();
  const userCoordinates = useMemoizedSelector(selectors.getUserCoordinates);

  const addressList = useMemoizedSelector(selectors.getAddressList);

  return (
    <View style={AddressMainStyles.viewFlex}>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={{
          text: "My Addresses",
          style: AddressMainStyles.txtHeader,
        }}
      />
      <View style={AddressMainStyles.scrollviewContainer}>
        <ScrollView style={{ flex: 1 }}>
          {addressList.length > 0 ? (
            addressList.map((props, index) => {
              return (
                <ListItem
                  bottomDivider={true}
                  key={index}
                  containerStyle={{
                    alignItems: "flex-start",
                  }}
                >
                  <Icon
                    group="accountSettings"
                    name="addressPin"
                    width={20}
                    height={20}
                  />
                  <ListItem.Content style={{ alignItems: "flex-start" }}>
                    <Text
                      text={props.label}
                      textStyle={AddressMainStyles.addressLabel}
                    />
                    <Text
                      text={props.contactName + ", " + props.contactNumber}
                      textStyle={AddressMainStyles.txtSubAddress}
                    />
                    <Text
                      text={props.addressDetails}
                      textStyle={AddressMainStyles.txtSubAddress}
                    />
                    <Text
                      text={props.noteRider}
                      textStyle={AddressMainStyles.txtSubAddress}
                    />
                  </ListItem.Content>

                  <Icon
                    group="accountSettings"
                    name={"edit"}
                    width={20}
                    height={20}
                  />
                </ListItem>
              );
            })
          ) : (
            <View style={AddressMainStyles.noAddressView}>
              <Icon
                group={"accountSettings"}
                name={"illustration_address"}
                width={150}
                height={150}
              />
              <Text
                text={"No added address yet"}
                textStyle={AddressMainStyles.noAddressTextStyle}
              />
            </View>
          )}
        </ScrollView>
      </View>

      <View style={AddressMainStyles.footer}>
        <Button
          title="Add New Address"
          onPress={() => {
            navigate("Stack", {
              screen: routes.ACCOUNTS_SEARCH_ADDRESS,
              params: {
                latitude: userCoordinates.latitude,
                longitude: userCoordinates.longitude,
                location: userCoordinates.location,
              },
            });
          }}
          buttonStyle={AddressMainStyles.fullWidth}
        />
      </View>
    </View>
  );
};

export default AddressMainTemplate;
