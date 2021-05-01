import React, { useState, useEffect, useCallback, useMemo } from "react";
import { equals } from "ramda";
import { useDispatch } from "react-redux";
import {
  Animated,
  Dimensions,
  FlatList,
  LayoutChangeEvent,
  LayoutRectangle,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { AppButton } from "@app/components/button";
import { useMemoizedSelector } from "@app/hooks";
import { selectors, actions } from "@app/redux/shop";
import { initShopState } from "@app/redux/shop/data";
import { ListProduct } from "@app/components/list/list-product";
import { SellerCard } from "@app/components/cards/product";
import { Products } from "redux/api-models/product-list";
import { Props as ButtonProps } from "@app/components/button/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";
import { HeaderHeightContext } from "@react-navigation/stack";

const { height } = Dimensions.get("screen");

const ProductContent: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [view, setView] = useState({
    list: true,
    grid: false,
  });

  const callProductListApi = useCallback(
    () => dispatch(actions.callProductListApi.request()),
    [dispatch]
  );

  const products = useMemoizedSelector(selectors.getProductListResponse)
    .response;

  const addProductResponse = useMemoizedSelector(
    selectors.getAddProductResponse
  );

  const successResponse = useMemo(() => {
    return (
      !addProductResponse.isLoading &&
      !equals(
        addProductResponse.response,
        initShopState.addProductResponse.response
      )
    );
  }, [addProductResponse.isLoading, addProductResponse.response]);

  useEffect(() => {
    callProductListApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (successResponse) {
      callProductListApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successResponse]);

  const boostButtonProps: ButtonProps = {
    onPress: () => console.log("boost"),
    title: "Boost Now",
    containerStyle: styles.boostButtonContainer,
    textStyle: styles.txtBoostNow,
  };

  const addProdButtonProps: ButtonProps = {
    onPress: () => navigate(routes.PRODUCT_ADD),
    title: "Add Product",
    containerStyle: styles.addProdButton,
  };

  const boostListButtonProps: ButtonProps = {
    onPress: () => console.log("boost"),
    title: "Boost Now",
    containerStyle: styles.boostListContainer,
    textStyle: styles.txtBoostList,
  };

  const productss = [
    {
      id: "1",
      name: "gg",
    },
    {
      id: "2",
      name: "gg",
    },
    {
      id: "3",
      name: "gg",
    },
    {
      id: "4",
      name: "gg",
    },
  ];

  return (
    <View style={styles.contentContainer}>
      <ListItem bottomDivider>
        <ListItem.Title>List Filter</ListItem.Title>
        <ListItem.Content style={styles.dropdownIconContainer}>
          <AntDesign name="down" style={styles.dropdownIcon} />
        </ListItem.Content>
        <ListItem.Content style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => setView({ grid: false, list: true })}
            style={styles.listView}>
            <Feather
              name="list"
              size={24}
              color={view.list ? theme.colors.primary : theme.colors.dark10}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setView({ grid: true, list: false })}
            style={styles.gridView}>
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
            data={productss}
            keyExtractor={(item) => String(item.id)}
            ListFooterComponent={
              <View style={{ height: 60, backgroundColor: "#F5F5F5" }} />
            }
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
          <View
            style={{
              position: "absolute",
              bottom: 5,
              left: 0,
              right: 0,
              paddingHorizontal: 20,
            }}>
            <AppButton {...addProdButtonProps} />
          </View>
        </React.Fragment>
      )}

      {view.grid && (
        <React.Fragment>
          <FlatList
            numColumns={2}
            data={productss}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.row}
            ListFooterComponent={
              <View style={{ height: 60, backgroundColor: "#F5F5F5" }} />
            }
            renderItem={({ item }: { item: Products }) => (
              <SellerCard
                item={item}
                ActionButton={
                  <View style={styles.buttonContainer}>
                    <AppButton {...boostButtonProps} />
                  </View>
                }
              />
            )}
          />
          <View
            style={{
              position: "absolute",
              bottom: 5,
              left: 0,
              right: 0,
              paddingHorizontal: 20,
            }}>
            <AppButton {...addProdButtonProps} />
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

export default ProductContent;
