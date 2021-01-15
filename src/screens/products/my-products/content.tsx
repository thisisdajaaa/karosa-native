import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { AppButton } from "@app/components/button";
import { useMemoizedSelector } from "@app/hooks";
import { selectors, actions } from "@app/redux/shop";
import { ListProduct } from "@app/components/list/list-product";
import { ProductCard } from "@app/components/cards/product";
import { Products } from "@app/redux/api-models/products";
import { Props as ButtonProps } from "@app/components/button/types";

import { styles } from "./styles";

const Content: React.FC = () => {
  const dispatch = useDispatch();

  const [view, setView] = useState({
    list: true,
    grid: false,
  });

  const callProductApi = useCallback(
    () => dispatch(actions.callProductsApi.request()),
    [dispatch]
  );

  const products = useMemoizedSelector(selectors.getProductResponse).response;

  useEffect(() => {
    callProductApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const boostButtonProps: ButtonProps = {
    onPress: () => console.log("boost"),
    title: "Boost Now",
    containerStyle: styles.boostButtonContainer,
    textStyle: styles.txtBoostNow,
  };

  const addProdButtonProps: ButtonProps = {
    onPress: () => console.log("add product"),
    title: "Add Product",
    containerStyle: styles.addProdButton,
  };

  const boostListButtonProps: ButtonProps = {
    onPress: () => console.log("boost"),
    title: "Boost Now",
    containerStyle: styles.boostListContainer,
    textStyle: styles.txtBoostList,
  };

  return (
    <View style={styles.contentContainer}>
      <ListItem bottomDivider>
        <ListItem.Title>Filter</ListItem.Title>
        <ListItem.Content style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => setView({ grid: false, list: true })}
            style={styles.listView}
          >
            <Feather
              name="list"
              size={24}
              color={view.list ? theme.colors.primary : theme.colors.dark10}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setView({ grid: true, list: false })}
            style={styles.gridView}
          >
            <Feather
              name="grid"
              size={20}
              color={view.grid ? theme.colors.primary : theme.colors.dark10}
            />
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>

      {view.list && (
        <React.Fragment>
          <FlatList
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }: { item: Products }) => (
              <ListProduct
                item={item}
                ActionButton={
                  <ListItem.Content style={styles.boostListButton}>
                    <AppButton {...boostListButtonProps} />
                  </ListItem.Content>
                }
              />
            )}
          />
          <View style={styles.addProdContainer}>
            <AppButton {...addProdButtonProps} />
          </View>
        </React.Fragment>
      )}

      {view.grid && (
        <React.Fragment>
          <FlatList
            numColumns={2}
            data={products}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.row}
            renderItem={({ item }: { item: Products }) => (
              <ProductCard
                item={item}
                ActionButton={
                  <View style={styles.buttonContainer}>
                    <AppButton {...boostButtonProps} />
                  </View>
                }
              />
            )}
          />
          <View style={styles.addProdContainer}>
            <AppButton {...addProdButtonProps} />
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

export default React.memo(Content);