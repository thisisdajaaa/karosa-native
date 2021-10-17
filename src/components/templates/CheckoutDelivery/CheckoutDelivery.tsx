/**
 *
 * CheckoutDelivery
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import CheckoutDeliveryStyles from "./styles";
import ListRadioGroup from "@app/components/organisms/ListRadioGroup";
import Button from "@app/atoms/Button";
import { OPTIONS } from "./config";

const CheckoutDeliveryTemplate: FC<PropsType> = (props) => {
  const { storeIndex, sheetRef } = props;

  return (
    <>
      <Text
        text="Choose your delivery option"
        textStyle={CheckoutDeliveryStyles.txtProductStatus}
      />
      <View style={CheckoutDeliveryStyles.spacer} />
      <ListRadioGroup
        name={`orderData[${storeIndex}].deliveryOption`}
        options={OPTIONS}
      />
      <View style={CheckoutDeliveryStyles.buttonContainer}>
        <Button title="Confirm" onPress={() => sheetRef.current?.close()} />
      </View>
    </>
  );
};

export default CheckoutDeliveryTemplate;
