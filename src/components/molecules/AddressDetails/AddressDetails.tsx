/**
 *
 * AddressDetails
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import AddressDetailsStyles from "./styles";
import { View } from "react-native";

const AddressDetails: FC<PropsType> = (props) => {
  const { name, barangayId, detailedAddress, phoneNumber, isDefault } = props;

  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <View style={AddressDetailsStyles.contentContainer}>
          <Text
            text={name}
            numberOfLines={1}
            customStyle={AddressDetailsStyles.txtName}
          />
          <Text
            text={phoneNumber}
            numberOfLines={1}
            customStyle={AddressDetailsStyles.txtDetails}
          />

          {barangayId && (
            <Text
              text={`${barangayId}`}
              numberOfLines={1}
              customStyle={AddressDetailsStyles.txtDetails}
            />
          )}

          <Text
            text={detailedAddress}
            numberOfLines={6}
            customStyle={AddressDetailsStyles.txtDetails}
          />
        </View>
      </ListItem.Content>

      {isDefault && (
        <View style={AddressDetailsStyles.defaultContainer}>
          <Text
            text={"default"}
            customStyle={AddressDetailsStyles.txtDefault}
          />
        </View>
      )}
    </ListItem>
  );
};

export default AddressDetails;
