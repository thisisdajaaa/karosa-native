/**
 *
 * ProductList
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { StatusBar } from "react-native";
import { theme } from "@app/styles";
import { ProductTabs } from "@app/navigators/tab-navigator";
import Header from "@app/molecules/Header";
import SearchBar from "@app/molecules/SearchBar";

import type { PropsType } from "./types";

const ProductListTemplate: FC<PropsType> = (props) => {
  const { navigation } = props;

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: navigation.onBack,
        }}
        centerComponent={
          <SearchBar
            backgroundColor="secondary"
            size="sm"
            placeholder="Search in My Products"
            onFocus={navigation.onSearch}
          />
        }
        rightComponent={{
          icon: "chat",
          color: theme.colors.primary,
        }}
      />
      <ProductTabs />
    </Fragment>
  );
};

export default ProductListTemplate;
