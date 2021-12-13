/**
 *
 * AddressMainTemplate
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import { ScrollView, View } from "react-native";
import Header from "@app/components/molecules/Header";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import { useNavigation } from "@react-navigation/core";
import routes from "@app/navigators/routes";
import { useMemoizedSelector } from "@app/hooks";
import { selectors } from "@app/redux/address";
import AddressMainTemplateStyles from "./styles";
import { ListItem } from "react-native-elements";
import Button from "@app/atoms/Button";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const AddressMainTemplate: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();
  const userLocationAddress = useMemoizedSelector(selectors.getUserLocation);

  const addressList = useMemoizedSelector(selectors.getAddressList);
  return (
    <View style={AddressMainTemplateStyles.viewFlex}>
      <Header
        barStyle="light-content"
        leftComponent={
          <TouchableWithoutFeedback onPress={goBack}>
            <Icon
              group="accountSettings"
              name={"arrow"}
              width={20}
              height={20}
            />
          </TouchableWithoutFeedback>
        }
        hasBottomDivider={true}
        centerComponent={<Text text={"Address"} />}
      />
      <View style={AddressMainTemplateStyles.scrollviewContainer}>
        <ScrollView style={{ flex: 1 }}>
          {addressList.length > 0 ? (
            addressList.map((props) => {
              return (
                <ListItem bottomDivider={true}>
                  <View
                    style={
                      AddressMainTemplateStyles.infoContainerWithoutChevron
                    }>
                    <Icon
                      group="accountSettings"
                      name={"address_pointer"}
                      width={20}
                      height={20}
                    />
                  </View>
                  <ListItem.Content
                    style={AddressMainTemplateStyles.listContainer}>
                    <View
                      style={AddressMainTemplateStyles.addressDetailsContainer}>
                      <Text
                        text={props.label}
                        textStyle={AddressMainTemplateStyles.addressLabel}
                      />
                      <Text
                        text={props.contactName + ", " + props.contactNumber}
                      />
                      <Text text={props.addressDetails} />
                      <Text text={props.noteRider} />
                    </View>
                  </ListItem.Content>

                  <View
                    style={
                      AddressMainTemplateStyles.infoContainerWithoutChevron
                    }>
                    <Icon
                      group="accountSettings"
                      name={"edit"}
                      width={20}
                      height={20}
                    />
                  </View>
                </ListItem>
              );
            })
          ) : (
            <View style={AddressMainTemplateStyles.noAddressView}>
              <Icon
                group={"accountSettings"}
                name={"illustration_address"}
                width={150}
                height={150}
              />
              <Text
                text={"No added address yet"}
                textStyle={AddressMainTemplateStyles.noAddressTextStyle}
              />
            </View>
          )}
        </ScrollView>
      </View>

      <View style={AddressMainTemplateStyles.footer}>
        <Button
          title="Add New Address"
          onPress={() => {
            navigate("Stack", {
              screen: routes.ACCOUNTS_SEARCH_ADDRESS,
              params: {
                latitude: userLocationAddress.latitude,
                longitude: userLocationAddress.longitude,
              },
            });
          }}
          buttonStyle={AddressMainTemplateStyles.fullWidth}
        />
      </View>
    </View>
  );
};

export default AddressMainTemplate;
