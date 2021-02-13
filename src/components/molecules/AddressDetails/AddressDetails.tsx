/**
 *
 * AddressDetails
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import AddressDetailsStyles from "./styles";

const AddressDetails: FC<PropsType> = (props) => {
  const { name, barangayId, detailedAddress, phoneNumber, isDefault } = props;

  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <View style={AddressDetailsStyles.contentContainer}>
          <Text
            text={name}
            numberOfLines={NUM_LINES.ONE}
            customStyle={AddressDetailsStyles.txtName}
          />
          <Text
            text={phoneNumber}
            numberOfLines={NUM_LINES.ONE}
            customStyle={AddressDetailsStyles.txtDetails}
          />
          {barangayId && (
            <Text
              text={`${barangayId}`}
              numberOfLines={NUM_LINES.ONE}
              customStyle={AddressDetailsStyles.txtDetails}
            />
          )}
          <Text
            text={detailedAddress}
            numberOfLines={NUM_LINES.SIX}
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
