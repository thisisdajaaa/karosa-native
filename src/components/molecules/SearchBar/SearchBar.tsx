/* eslint-disable @typescript-eslint/no-empty-function */
/**
 *
 * SearchBar
 * @format
 *
 */

import React, { FC } from "react";
import { Platform } from "react-native";
import { SearchBar as RnSearchBar } from "react-native-elements";

import type { PropsType } from "./types";
import SearchBarStyles from "./styles";

const SearchBar: FC<PropsType> = (props) => {
  const {
    backgroundColor = "primary",
    size = "lg",
    autoCorrect,
    autoFocus,
    onCancel,
    onFocus,
    onTouchStart,
    placeholder,
    value,
  } = props;

  const {
    inputContainer: inputContainerStyle,
    mainContainer: mainContainerStyle,
  } = SearchBarStyles(size, backgroundColor);

  return (
    <RnSearchBar
      platform={Platform.OS === "android" ? "android" : "ios"}
      placeholder={placeholder}
      inputContainerStyle={inputContainerStyle}
      autoCorrect={autoCorrect}
      containerStyle={mainContainerStyle}
      returnKeyType="search"
      accessibilityRole="search"
      autoFocus={autoFocus}
      onTouchStart={onTouchStart}
      onCancel={onCancel ? onCancel : () => {}}
      onFocus={onFocus ? onFocus : () => {}}
      onChangeText={() => {}}
      value={value ?? ""}
      onBlur={() => {}}
      onClear={() => {}}
      loadingProps={{}}
      lightTheme={false}
      round={false}
      clearIcon={{ name: "remove" }}
      searchIcon={{ name: "search" }}
      showLoading={false}
      cancelButtonTitle={""}
      cancelButtonProps={{}}
      showCancel={false}
    />
  );
};

export default SearchBar;
