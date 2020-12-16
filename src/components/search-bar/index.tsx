import React, { useState } from "react";
import { SearchBar as BaseSearchBar } from "react-native-elements";
import { theme } from "@app/styles";

import { Props } from "./types";

export const SearchBar: React.FC<Props> = React.memo(
  ({
    width = 280,
    placeholder,
    onTouchStart,
    backgroundColor = "primary",
    onFocus,
    searchVal,
  }) => {
    const [value, setValue] = useState<string>("");

    return (
      <React.Fragment>
        <BaseSearchBar
          placeholder={placeholder}
          inputContainerStyle={{
            backgroundColor:
              backgroundColor === "primary"
                ? theme.colors.white
                : theme.colors.light10,
            height: 42,
            width,
          }}
          autoCorrect
          containerStyle={{
            backgroundColor: "transparent",
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
          }}
          returnKeyType={"search"}
          accessibilityTraits="search"
          accessibilityRole="search"
          onTouchStart={onTouchStart}
          onFocus={onFocus}
          onEndEditing={(_e) => console.log("submit search filter")}
          onChangeText={(text) => setValue(text)}
          value={searchVal ? searchVal : value}
        />
      </React.Fragment>
    );
  }
);

SearchBar.displayName = "SearchBar";
