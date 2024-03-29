/**
 *
 * ProductVariation
 * @format
 *
 */

import React, { FC } from "react";
import uuid from "react-native-uuid";
import { ListItem } from "react-native-elements";
import { useFormikContext } from "formik";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { theme } from "@app/styles";
import { getPlatform } from "@app/utils";
import Header from "@app/molecules/Header";
import Text from "@app/atoms/Text";
import { VariationForm, VariationItem } from "@app/redux/shop/models";
import Icon from "@app/atoms/Icon";
import Button from "@app/atoms/Button";
import validationSchema from "@app/screens/ProductVariation/validation";

import type { PropsType } from "./types";
import { ADD_VARIATION_LENGTH, ICON_SIZE } from "./config";
import NewVariation from "./NewVariation";
import ProductVariationStyles from "./styles";

const ProductVariationTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values, setValues, submitForm } = useFormikContext<VariationForm>();

  const isIOS = getPlatform.getInstance() === "ios";
  const isFormValid = validationSchema.isValidSync(values);

  const addNewVariation = () => {
    const newVariationItem: VariationItem = {
      id: uuid.v4(),
      variationName: "",
      hasImage: false,
      options: [],
    };

    const newVariationData: VariationItem[] = [
      ...values.variationData,
      newVariationItem,
    ];

    setValues({
      ...values,
      variationData: newVariationData,
    });
  };

  const getHeader = () => {
    return (
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Variation",
          style: ProductVariationStyles.txtHeader,
        }}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <KeyboardAvoidingView
        style={ProductVariationStyles.container}
        behavior={isIOS ? "padding" : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            {values.variationData.map((_, index) => (
              <NewVariation key={index} index={index} />
            ))}

            {values.variationData.length < ADD_VARIATION_LENGTH && (
              <View style={ProductVariationStyles.btnAddVariationContainer}>
                <ListItem onPress={addNewVariation}>
                  <Icon
                    group="products"
                    name="addVariation"
                    height={ICON_SIZE.ADD}
                    width={ICON_SIZE.ADD}
                  />
                  <Text
                    text="Add another variation"
                    textStyle={ProductVariationStyles.btnAddVariationLbl}
                  />
                </ListItem>
              </View>
            )}
          </>
        </ScrollView>

        <View style={ProductVariationStyles.buttonContainer}>
          <Button
            title="Set Stock and Price"
            disabled={!isFormValid}
            onPress={submitForm}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProductVariationTemplate;
