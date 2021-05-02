/**
 *
 * ProductSearch
 * @format
 *
 */

import React, { FC, Fragment, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Header from "@app/molecules/Header";
import SearchBar from "@app/molecules/SearchBar";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ProductSearchStyles from "./styles";
import { mockRecentSearch } from "./config";

const ProductSearch: FC<PropsType> = (props) => {
  const { onBack } = props;

  const [value, setValue] = useState("");

  return (
    <Fragment>
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
      <View style={ProductSearchStyles.container}>
        <Text
          textStyle={ProductSearchStyles.txtRecentSearch}
          text="Recent Searches"
        />

        <ScrollView
          contentContainerStyle={ProductSearchStyles.flatListContainer}
          showsVerticalScrollIndicator={false}>
          {mockRecentSearch.map((item) => (
            <TouchableOpacity
              onPress={() => setValue(item.title)}
              style={ProductSearchStyles.item}>
              <Text
                textStyle={ProductSearchStyles.txtSearchTitle}
                text={item.title}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Fragment>
  );
};

export default ProductSearch;
