/**
 *
 * ProductMeasurement
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import { View } from "react-native";

import { listIterator } from "@app/utils";
import ListRadioGroup from "@app/organisms/ListRadioGroup";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ProductMeasurementStyles from "./styles";

const ProductMeasurement: FC<PropsType> = (props) => {
  const {} = props;

  const options = [
    {
      id: "1",
      label: "Grams",
    },
    {
      id: "2",
      label: "Kilograms",
    },
    {
      id: "3",
      label: "Piece",
    },
  ];

  const getBtmSheetTitle = () => {
    return (
      <Fragment>
        <Text
          text="Unit of measurement"
          textStyle={ProductMeasurementStyles.txtProductMeasurement}
        />
        <View style={ProductMeasurementStyles.spacer} />
      </Fragment>
    );
  };

  const getMeasurementForm = (): React.ReactElement[] => {
    const items: ReactElement[] = [];

    const units = <ListRadioGroup name="measurement" options={options} />;

    const btnSubmit = (
      <View style={ProductMeasurementStyles.buttonContainer}>
        <FormButton title="Done" />
      </View>
    );

    items.push(units, btnSubmit);

    return listIterator(items);
  };

  return (
    <Fragment>
      <Fragment>{getBtmSheetTitle()}</Fragment>
      <Fragment>{getMeasurementForm()}</Fragment>
    </Fragment>
  );
};

export default ProductMeasurement;
