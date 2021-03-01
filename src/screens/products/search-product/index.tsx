import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from "react-native-elements";
import { FlatList, TouchableOpacity, View } from "react-native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { BaseText } from "@app/components/base-text";
import { SearchBar } from "@app/components/search-bar";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";

const SearchProductScreen: React.FC = () => {
  const { goBack } = useNavigation();

  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        placement={"left"}
        containerStyle={{
          backgroundColor: "transparent",
          width: "100%",
        }}
        centerComponent={
          <SearchBar
            placeholder={"Search in my products"}
            backgroundColor={"secondary"}
            width={300}
          />
        }
        rightComponent={{
          text: "Cancel",
          onPress: goBack,
          style: {
            fontWeight: "400",
            ...theme.textRegular,
            color: theme.colors.dark20,
          },
        }}
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
              onPress={() => console.log("title")}
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

export default SearchProductScreen;
