/**
 *
 * ProductSearch
 * @format
 *
 */

import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Header from "@app/molecules/Header";
import SearchBar from "@app/molecules/SearchBar";
import Text from "@app/atoms/Text";

import { mockRecentSearch } from "./config";
import type { PropsType } from "./types";
import ProductSearchStyles from "./styles";

const ProductSearchTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const [value, setValue] = useState<string>("");

  const getHeader = () => {
    return (
      <Header
        hasBottomDivider
        centerComponent={
          <SearchBar
            backgroundColor="secondary"
            size="md"
            onChangeText={(text) => setValue(text)}
            value={value}
            placeholder="Search in My Products"
            autoFocus
            onCancel={onBack}
          />
        }
      />
    );
  };

  const getContent = () => {
    return mockRecentSearch.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setValue(item.title)}
        style={ProductSearchStyles.item}
      >
        <Text
          textStyle={ProductSearchStyles.txtSearchTitle}
          text={item.title}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <>
      <>{getHeader()}</>
      <View style={ProductSearchStyles.container}>
        <Text
          textStyle={ProductSearchStyles.txtRecentSearch}
          text="Recent Searches"
        />

        <ScrollView
          contentContainerStyle={ProductSearchStyles.flatListContainer}
          showsVerticalScrollIndicator={false}
        >
          <>{getContent()}</>
        </ScrollView>
      </View>
    </>
  );
};

export default ProductSearchTemplate;
