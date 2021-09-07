/**
 *
 * ProductStockPrice
 * @format
 *
 */

import React, { FC, useCallback } from "react";

import type { PropsType } from "./types";
import ProductStockPriceStyles from "./styles";
import { DIMENS, theme } from "@app/styles";
import Header from "@app/molecules/Header";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";
import { VariationForm } from "@app/redux/shop/models";
import { useFormikContext } from "formik";
import Text from "@app/atoms/Text";
import FormInput from "@app/components/molecules/FormInput";
import FormButton from "@app/components/molecules/FormButton";

const ProductStockPrice: FC<PropsType> = (props) => {
  const { onBack } = props;

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const { values } = useFormikContext<VariationForm>();

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
          text: "Stock, Price and Weight",
          style: ProductStockPriceStyles.txtHeader,
        }}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <View style={{ flex: 1, position: "relative" }}>
        <FlatList
          keyExtractor={keyExtractor}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={values.variationData}
          renderItem={({ item, index: variationKey }) => (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}>
              {/** Table Head */}
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    backgroundColor: theme.colors.gold15,
                    flexDirection: "row",
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    width: DIMENS.screenWidth * 1.2,
                    alignItems: "center",
                  }}>
                  {/** TH1 */}
                  <View style={{ flexGrow: 2, flexBasis: 50 }}>
                    <Text
                      text={item.variationName}
                      textStyle={{ ...theme.textListItem }}
                    />
                  </View>

                  {/** TH2 */}
                  <View
                    style={{
                      flexGrow: 1,
                      flexShrink: 1,
                      flexBasis: 60,
                    }}>
                    <View
                      style={{
                        flexDirection: "row",
                      }}>
                      <Text
                        text="Price"
                        textStyle={{ ...theme.textListItem, marginRight: 4 }}
                      />
                      <Text text="*" textStyle={{ color: theme.colors.red5 }} />
                    </View>
                  </View>

                  {/** TH3 */}
                  <View style={{ flexGrow: 1, flexShrink: 1, flexBasis: 60 }}>
                    <View
                      style={{
                        flexDirection: "row",
                      }}>
                      <Text
                        text="Stock"
                        textStyle={{ ...theme.textListItem, marginRight: 4 }}
                      />
                      <Text text="*" textStyle={{ color: theme.colors.red5 }} />
                    </View>
                  </View>

                  {/** TH4 */}
                  <View style={{ flexGrow: 1, flexShrink: 1, flexBasis: 60 }}>
                    <View
                      style={{
                        flexDirection: "row",
                      }}>
                      <Text
                        text="Weight"
                        textStyle={{ ...theme.textListItem, marginRight: 4 }}
                      />
                      <Text text="*" textStyle={{ color: theme.colors.red5 }} />
                    </View>
                  </View>
                </View>

                {/** Table Body */}
                {item.options.map((option, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: theme.colors.white,
                      flexDirection: "row",
                      padding: 12,
                      width: DIMENS.screenWidth * 1.2,
                      alignItems: "center",
                      marginBottom: index === item.options.length - 1 ? 12 : 0,
                      borderBottomColor: theme.colors.light10,
                      borderBottomWidth: StyleSheet.hairlineWidth,
                    }}>
                    <View style={{ flexGrow: 2, flexBasis: 50 }}>
                      <Text
                        text={option.optionName}
                        textStyle={{
                          ...theme.textListItem,
                        }}
                      />
                    </View>

                    {/** TH2 */}
                    <View
                      style={{
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: 60,
                      }}>
                      <FormInput
                        name={`variationData[${variationKey}].options[${index}].price`}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        inputContainerStyle={{
                          padding: 5,
                          height: 28,
                          width: 62,
                        }}
                      />
                    </View>

                    {/** TH3 */}
                    <View style={{ flexGrow: 1, flexShrink: 1, flexBasis: 60 }}>
                      <FormInput
                        name={`variationData[${variationKey}].options[${index}].stock`}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        inputContainerStyle={{
                          padding: 5,
                          height: 28,
                          width: 62,
                        }}
                      />
                    </View>

                    {/** TH4 */}
                    <View style={{ flexGrow: 1, flexShrink: 1, flexBasis: 60 }}>
                      <FormInput
                        name={`variationData[${variationKey}].options[${index}].weight`}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        inputContainerStyle={{
                          padding: 5,
                          height: 28,
                          width: 62,
                        }}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
        />

        <View style={ProductStockPriceStyles.buttonContainer}>
          <FormButton title="Submit" />
        </View>
      </View>
    </>
  );
};

export default ProductStockPrice;
