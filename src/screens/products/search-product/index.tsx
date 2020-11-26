import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header, SearchBar } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Platform, TouchableOpacity, View } from "react-native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { BaseText } from "@app/components/base-text";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";

const SearchProduct: React.FC = () => {
  const { goBack } = useNavigation();

  const [search, setSearch] = useState("");

  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        placement={"left"}
        containerStyle={{
          backgroundColor: "transparent",
          width: "100%",
        }}
        leftComponent={
          <SearchBar
            placeholder="Search in My Products"
            platform={Platform.OS === "android" ? "android" : "ios"}
            inputContainerStyle={{
              backgroundColor: "transparent",
              width: "100%",
            }}
            autoFocus
            onCancel={() => goBack()}
            containerStyle={{
              marginLeft: "auto",
              backgroundColor: "transparent",
              borderColor: "none",
              width: "100%",
            }}
            returnKeyType={"search"}
            showCancel
            searchIcon={
              <MaterialIcons
                name="search"
                size={24}
                color={theme.colors.primary}
              />
            }
            cancelButtonProps={{ color: theme.colors.dark20 }}
            accessibilityTraits="search"
            accessibilityRole="search"
            onEndEditing={(_e) => console.log("submit search filter")}
            style={styles.searchWidth}
            onChangeText={(text) => setSearch(text)}
            value={search}
          />
        }
      />
    ),

    customStyles: styles.container,
  };

  const mockArray = [
    {
      id: 1,
      title: "Apple Product",
    },
    {
      id: 2,
      title: "Mango",
    },
    {
      id: 3,
      title: "Banana",
    },
    {
      id: 4,
      title: "Banana",
    },
    {
      id: 5,
      title: "Banana",
    },
  ];

  return (
    <Screen {...screenProps}>
      <BaseText style={styles.txtRecentSearch}>Recent Searches</BaseText>

      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={3}
          data={mockArray}
          keyExtractor={(item: any) => String(item.id)}
          contentContainerStyle={styles.row}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSearch(item.title)}
              style={styles.item}
            >
              <BaseText style={styles.txtSearchTitle}>{item.title}</BaseText>
            </TouchableOpacity>
          )}
        />
      </View>
    </Screen>
  );
};

export default SearchProduct;
