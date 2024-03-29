/**
 *
 * ProductAvailability
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import { View } from "react-native";
import { listIterator } from "@app/utils";
import ListCheckbox from "@app/organisms/ListCheckbox";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";

import ProductAvailabilityStyles from "./styles";

const ProductAvailabilityTemplate: FC = () => {
  const checkbox = (label: string, name: string) => (
    <View style={ProductAvailabilityStyles.availabilityContainer}>
      <ListCheckbox label={label} name={name} hasBottomDivider />
    </View>
  );

  const getBtmSheetTitle = () => {
    return (
      <>
        <Text
          text="Available every"
          textStyle={ProductAvailabilityStyles.txtProductAvailability}
        />
        <View style={ProductAvailabilityStyles.spacer} />
      </>
    );
  };

  const getAvailabilityForm = (): ReactElement[] => {
    const items: ReactElement[] = [];

    const mon = checkbox("Monday", "monday");
    const tues = checkbox("Tuesday", "tuesday");
    const wed = checkbox("Wednesday", "wednesday");
    const thurs = checkbox("Thursday", "thursday");
    const fri = checkbox("Friday", "friday");
    const sat = checkbox("Saturday", "saturday");
    const sun = checkbox("Sunday", "sunday");

    const btnSubmit = (
      <View style={ProductAvailabilityStyles.buttonContainer}>
        <FormButton title="Submit" />
      </View>
    );

    items.push(mon, tues, wed, thurs, fri, sat, sun, btnSubmit);

    return listIterator(items);
  };

  return (
    <>
      <>{getBtmSheetTitle()}</>
      <>{getAvailabilityForm()}</>
    </>
  );
};

export default ProductAvailabilityTemplate;
