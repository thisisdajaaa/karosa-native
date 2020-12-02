import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { FlatList, TouchableOpacity, View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { actions } from "@app/redux/shop";

import { styles } from "./styles";

const ChooseCategoryScreen: React.FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const setCategory = useCallback(
    (values: number) => dispatch(actions.setCategory(values)),
    [dispatch]
  );

  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        containerStyle={{ backgroundColor: "transparent" }}
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={{
          text: "Choose Category",
          style: {
            ...theme.textRegular,
            fontWeight: "700",
            alignSelf: "center",
          },
        }}
      />
    ),
    customStyles: styles.container,
  };

  const categoryData = [
    {
      id: 1,
      label: "Region's Best",
    },
    {
      id: 2,
      label: "Upcoming Harvest",
    },
    {
      id: 3,
      label: "Coffee and Cacao",
    },
    {
      id: 4,
      label: "Fruits",
    },
    {
      id: 5,
      label: "Vegetables",
    },
    {
      id: 6,
      label: "Grains and Cerials",
    },
    {
      id: 7,
      label: "Beverages",
    },
    {
      id: 8,
      label: "Herbs and Spices",
    },
    {
      id: 9,
      label: "Dairy",
    },
    {
      id: 10,
      label: "Fish and Meat",
    },
    {
      id: 11,
      label: "Root Crops",
    },
    {
      id: 12,
      label: "Seeding",
    },
  ];

  const categoryItem = ({ item }: any) => {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => {
            setCategory(item.id);
            goBack();
          }}
          style={styles.categoryCircle}
        />
        <View style={styles.labelContainer}>
          <BaseText style={styles.txtLabel}>{item.label}</BaseText>
        </View>
      </View>
    );
  };

  return (
    <Screen {...screenProps}>
      <FlatList
        numColumns={3}
        data={categoryData}
        keyExtractor={(item: any) => String(item.id)}
        contentContainerStyle={styles.content}
        renderItem={categoryItem}
      />
    </Screen>
  );
};

export default ChooseCategoryScreen;
