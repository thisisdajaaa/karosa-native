import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { FlatList, TouchableOpacity, View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { useMemoizedSelector } from "@app/hooks";
import { actions as productActions } from "@app/redux/shop";
import { actions as categoryActions, selectors } from "@app/redux/category";
import { Categories } from "@app/redux/api-models/category-list";

import { styles } from "./styles";

const ChooseCategoryScreen: React.FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const callCategoryListApi = useCallback(
    () => dispatch(categoryActions.callCategoryListApi.request()),
    [dispatch]
  );

  const setCategory = useCallback(
    (values: number) => dispatch(productActions.setCategory(values)),
    [dispatch]
  );

  const categories = useMemoizedSelector(selectors.getCategoryListResponse)
    .response;

  useEffect(() => {
    callCategoryListApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const categoryItem = ({ item }: { item: Categories }) => {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => {
            setCategory(item.id);
            goBack();
          }}
          style={styles.categoryCircle}
        />
        <View style={styles.nameContainer}>
          <BaseText style={styles.txtName}>{item.name}</BaseText>
        </View>
      </View>
    );
  };

  return (
    <Screen {...screenProps}>
      <FlatList
        numColumns={3}
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={categoryItem}
      />
    </Screen>
  );
};

export default ChooseCategoryScreen;
