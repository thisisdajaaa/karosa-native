/**
 *
 * AddressMain
 * @format
 *
 */

import React, { FC } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { ListItem } from "react-native-elements";
import { isEmpty } from "lodash";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";
import { ICON_SIZE } from "./config";
import AddressMainStyles from "./styles";

const AddressMainTemplate: FC<PropsType> = (props) => {
  const { addressList, handleBack, handleEditAddress, handleNewAddress } =
    props;

  return (
    <>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: handleBack,
        }}
        centerComponent={{
          text: "My Addresses",
          style: AddressMainStyles.txtHeader,
        }}
      />
      <View style={AddressMainStyles.container}>
        <ScrollView>
          {!isEmpty(addressList) ? (
            addressList.map((address, index) => {
              return (
                <ListItem
                  bottomDivider={true}
                  key={index}
                  containerStyle={AddressMainStyles.listStart}
                >
                  <Icon
                    group="accountSettings"
                    name="addressPin"
                    width={ICON_SIZE.SM}
                    height={ICON_SIZE.SM}
                  />
                  <ListItem.Content style={AddressMainStyles.listStart}>
                    <View style={AddressMainStyles.flexRow}>
                      <Text
                        text={address.label}
                        textStyle={AddressMainStyles.addressLabel}
                      />

                      {address.isDefault && (
                        <Text
                          text="[Default]"
                          textStyle={AddressMainStyles.txtDefault}
                        />
                      )}
                    </View>

                    <Text
                      text={`${address.contactName}, ${address.contactNumber}`}
                      textStyle={AddressMainStyles.txtSubAddress}
                    />
                    <Text
                      text={address.coords.location}
                      textStyle={AddressMainStyles.txtSubAddress}
                    />
                    <Text
                      text={`Note to rider: ${
                        address.noteRider ? address.noteRider : "None"
                      }`}
                      textStyle={AddressMainStyles.txtSubAddress}
                    />
                  </ListItem.Content>

                  <Pressable onPress={() => handleEditAddress(address)}>
                    <Icon
                      group="accountSettings"
                      name={"edit"}
                      width={ICON_SIZE.SM}
                      height={ICON_SIZE.SM}
                    />
                  </Pressable>
                </ListItem>
              );
            })
          ) : (
            <View style={AddressMainStyles.noAddressView}>
              <Icon
                group={"accountSettings"}
                name={"emptyAddress"}
                width={ICON_SIZE.LG}
                height={ICON_SIZE.LG}
              />
              <Text
                text={"No added addresses yet."}
                textStyle={AddressMainStyles.noAddressTextStyle}
              />
            </View>
          )}
        </ScrollView>

        <View style={AddressMainStyles.footer}>
          <Button
            title="Add New Address"
            onPress={handleNewAddress}
            buttonStyle={AddressMainStyles.fullWidth}
          />
        </View>
      </View>
    </>
  );
};

export default AddressMainTemplate;
