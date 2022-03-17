/**
 *
 * ProductStockPrice
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import { VariationOption } from "@app/redux/shop/models";
import { theme } from "@app/styles";
import { useFieldError } from "@app/hooks";
import ValidationMessage from "@app/molecules/ValidationMessage";
import FormInput from "@app/molecules/FormInput";

import type { InputItemsProps } from "./types";
import { MAX_LENGTH } from "./config";
import ProductStockPriceStyles, { OptionRowStyles } from "./styles";

const InputItems: FC<InputItemsProps> = (props) => {
  const { index, item, option, variationKey } = props;

  const { isError: hasPriceError } = useFieldError(
    `variationData[${variationKey}].options[${index}].price`
  );

  const { isError: hasStockError } = useFieldError(
    `variationData[${variationKey}].options[${index}].stock`
  );

  const { isError: hasWeightError } = useFieldError(
    `variationData[${variationKey}].options[${index}].weight`
  );

  const optionStyle = (index: number, option: VariationOption[]) => {
    const { optionRowContainer } = OptionRowStyles(index, option);

    return optionRowContainer;
  };

  return (
    <>
      <View key={index} style={optionStyle(index, item.options)}>
        <View style={ProductStockPriceStyles.tableColumnPrimary}>
          <Text
            text={option.optionName}
            textStyle={{
              ...theme.textListItem,
            }}
          />
        </View>

        <View style={ProductStockPriceStyles.tableColumnSecondary}>
          <FormInput
            name={`variationData[${variationKey}].options[${index}].price`}
            autoCompleteType="off"
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength={MAX_LENGTH.PRICE}
            inputContainerStyle={ProductStockPriceStyles.inputContainer}
          />

          {hasPriceError && (
            <View style={ProductStockPriceStyles.errorContainer}>
              <ValidationMessage
                name={`variationData[${variationKey}].options[${index}].price`}
              />
            </View>
          )}
        </View>

        <View style={ProductStockPriceStyles.tableColumnSecondary}>
          <FormInput
            name={`variationData[${variationKey}].options[${index}].stock`}
            autoCompleteType="off"
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength={MAX_LENGTH.STOCK}
            inputContainerStyle={ProductStockPriceStyles.inputContainer}
          />

          {hasStockError && (
            <View style={ProductStockPriceStyles.errorContainer}>
              <ValidationMessage
                name={`variationData[${variationKey}].options[${index}].stock`}
              />
            </View>
          )}
        </View>

        <View style={ProductStockPriceStyles.tableColumnSecondary}>
          <FormInput
            name={`variationData[${variationKey}].options[${index}].weight`}
            autoCompleteType="off"
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength={MAX_LENGTH.WEIGHT}
            inputContainerStyle={ProductStockPriceStyles.inputContainer}
          />

          {hasWeightError && (
            <View style={ProductStockPriceStyles.errorContainer}>
              <ValidationMessage
                name={`variationData[${variationKey}].options[${index}].weight`}
              />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default InputItems;
