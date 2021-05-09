/**
 *
 * ProductMeasurement
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import { View } from "react-native";
import { listIterator } from "@app/utils";
import ListRadioGroup from "@app/organisms/ListRadioGroup";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";

import { OPTIONS } from "./config";
import ProductMeasurementStyles from "./styles";

const ProductMeasurementTemplate: FC = () => {
  const getBtmSheetTitle = () => {
    return (
      <>
        <Text
          text="Unit of measurement"
          textStyle={ProductMeasurementStyles.txtProductMeasurement}
        />
        <View style={ProductMeasurementStyles.spacer} />
      </>
    );
  };

  const getMeasurementForm = (): React.ReactElement[] => {
    const items: ReactElement[] = [];

    const units = <ListRadioGroup name="measurement" options={OPTIONS} />;

    const btnSubmit = (
      <View style={ProductMeasurementStyles.buttonContainer}>
        <FormButton title="Done" />
      </View>
    );

    items.push(units, btnSubmit);

    return listIterator(items);
  };

  return (
    <>
      <>{getBtmSheetTitle()}</>
      <>{getMeasurementForm()}</>
    </>
  );
};

export default ProductMeasurementTemplate;
