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
import type { PropsType } from "./types";
import NewVariation from "./NewVariation";
import ProductVariationStyles from "./styles";
import FormButton from "@app/components/molecules/FormButton";

const ProductVariationTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values, setValues } = useFormikContext<VariationForm>();

  const isIOS = getPlatform.getInstance() === "ios";

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
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            {values.variationData.map((_, index) => (
              <NewVariation key={index} index={index} />
            ))}

            {values.variationData.length < 2 && (
              <View style={ProductVariationStyles.btnAddVariationContainer}>
                <ListItem onPress={addNewVariation}>
                  <Icon
                    group="products"
                    name="addVariation"
                    height={20}
                    width={20}
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

        {/** Button submit */}
        <View style={ProductVariationStyles.buttonContainer}>
          <FormButton title="Set Stock and Price" />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProductVariationTemplate;
