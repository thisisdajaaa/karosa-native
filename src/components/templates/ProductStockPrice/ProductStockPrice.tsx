/**
 *
 * ProductStockPrice
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useFormikContext } from "formik";
import Text from "@app/atoms/Text";
import { VariationForm } from "@app/redux/shop/models";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";
import FormButton from "@app/molecules/FormButton";

import type { PropsType } from "./types";
import { NUM_COL } from "./config";
import ProductStockPriceStyles from "./styles";
import InputItems from "./InputItems";

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
      <View style={ProductStockPriceStyles.container}>
        <FlatList
          keyExtractor={keyExtractor}
          numColumns={NUM_COL}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={values.variationData}
          renderItem={({ item, index: variationKey }) => (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}>
              <View style={ProductStockPriceStyles.innerContainer}>
                <View style={ProductStockPriceStyles.tableHeaderContainer}>
                  <View style={ProductStockPriceStyles.tableColumnPrimary}>
                    <Text
                      text={item.variationName}
                      textStyle={{ ...theme.textListItem }}
                    />
                  </View>

                  <View style={ProductStockPriceStyles.tableColumnSecondary}>
                    <View style={ProductStockPriceStyles.rowContainer}>
                      <Text
                        text="Price"
                        textStyle={ProductStockPriceStyles.txtTableHeader}
                      />
                      <Text
                        text="*"
                        textStyle={ProductStockPriceStyles.txtRequired}
                      />
                    </View>
                  </View>

                  <View style={ProductStockPriceStyles.tableColumnSecondary}>
                    <View style={ProductStockPriceStyles.rowContainer}>
                      <Text
                        text="Stock"
                        textStyle={ProductStockPriceStyles.txtTableHeader}
                      />
                      <Text
                        text="*"
                        textStyle={ProductStockPriceStyles.txtRequired}
                      />
                    </View>
                  </View>

                  <View style={ProductStockPriceStyles.tableColumnSecondary}>
                    <View style={ProductStockPriceStyles.rowContainer}>
                      <Text
                        text="Weight"
                        textStyle={ProductStockPriceStyles.txtTableHeader}
                      />
                      <Text
                        text="*"
                        textStyle={ProductStockPriceStyles.txtRequired}
                      />
                    </View>
                  </View>
                </View>

                {item.options.map((option, index) => (
                  <InputItems
                    key={index}
                    item={item}
                    variationKey={variationKey}
                    option={option}
                    index={index}
                  />
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
