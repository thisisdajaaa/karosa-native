import React, { FC } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

import { ICON_SIZE } from "./config";
import CheckoutStyles from "./styles";

const Address: FC = () => {
  return (
    <View style={CheckoutStyles.addressContainer}>
      <View style={CheckoutStyles.addressRow}>
        <Icon
          group="checkout"
          name="location"
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
        <Text
          text="Delivery Address"
          textStyle={CheckoutStyles.txtDeliveryAddress}
        />

        <TouchableWithoutFeedback onPress={() => 0}>
          <View style={CheckoutStyles.defaultContainer}>
            <Text text="Default" textStyle={CheckoutStyles.txtDefault} />

            <Icon
              group="common"
              name="chevron"
              height={ICON_SIZE}
              width={ICON_SIZE}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={CheckoutStyles.addressSubContainer}>
        <Text text="DAJA DAJA DAJA" textStyle={CheckoutStyles.txtName} />
        <Text text="(+63) 998 345 6432" textStyle={CheckoutStyles.txtAddress} />
        <Text
          text="St. Michael Drive V. Rama"
          textStyle={CheckoutStyles.txtAddress}
        />
        <Text
          text="Guadalupe, Cebu City"
          textStyle={CheckoutStyles.txtAddress}
        />
        <Text
          text="Visayas, Cebu, 6000"
          textStyle={CheckoutStyles.txtAddress}
        />
      </View>
    </View>
  );
};

export default Address;
