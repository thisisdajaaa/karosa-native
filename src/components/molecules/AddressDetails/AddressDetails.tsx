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
            textStyle={AddressDetailsStyles.txtName}
          />
          <Text
            text={phoneNumber}
            numberOfLines={NUM_LINES.ONE}
            textStyle={AddressDetailsStyles.txtDetails}
          />
          {barangayId && (
            <Text
              text={`${barangayId}`}
              numberOfLines={NUM_LINES.ONE}
              textStyle={AddressDetailsStyles.txtDetails}
            />
          )}
          <Text
            text={detailedAddress}
            numberOfLines={NUM_LINES.SIX}
            textStyle={AddressDetailsStyles.txtDetails}
          />
        </View>
      </ListItem.Content>
      {isDefault && (
        <View style={AddressDetailsStyles.defaultContainer}>
          <Text text={"default"} textStyle={AddressDetailsStyles.txtDefault} />
        </View>
      )}
    </ListItem>
  );
};

export default AddressDetails;
