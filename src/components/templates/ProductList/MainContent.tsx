/**
 *
 * MainContent
 * @format
 *
 */

import React, { FC, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ListItem } from "react-native-elements";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Products } from "@app/redux/api-models/product-list";
import { COMMON } from "@app/constants";
import ListProduct from "@app/organisms/ListProduct";
import Button from "@app/atoms/Button";
import Text from "@app/atoms/Text";
import ProductCard from "@app/organisms/ProductCard";
import routes from "@app/navigators/routes";

import type { ViewType } from "./types";
import { mockProducts } from "./config";
import ProductListStyles from "./styles";

const MainContent: FC = () => {
  const [view, setView] = useState<ViewType>("List");

  const { navigate } = useNavigation();

  const getListConfig = () => {
    return (
      <ListItem bottomDivider>
        <ListItem.Title>
          <Text text="List Filter" />
        </ListItem.Title>
        <ListItem.Content style={ProductListStyles.dropdownIconContainer}>
          <AntDesign name="down" style={ProductListStyles.dropdownIcon} />
        </ListItem.Content>
        <ListItem.Content style={ProductListStyles.flexRow}>
          <TouchableOpacity
            onPress={() => setView("List")}
            style={ProductListStyles.listView}
          >
            <Feather
              name="list"
              size={24}
              color={
                view === "List" ? theme.colors.primary : theme.colors.dark10
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setView("Grid")}
            style={ProductListStyles.gridView}
          >
            <Feather
              name="grid"
              size={20}
              color={
                view === "Grid" ? theme.colors.primary : theme.colors.dark10
              }
            />
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    );
  };

  const getList = () => {
    return (
      view === "List" && (
        <>
          <FlatList
            data={mockProducts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            ListFooterComponent={<View style={ProductListStyles.spacer} />}
            renderItem={({ item }: { item: Products }) => (
              <ListProduct
                productName={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                price="123"
                wholesale
                discount="30"
                likes={12}
                stock={30}
                rating={4.5}
                sold={12}
                hasBottomDivder
                onDiscontinue={() => 0}
                onBoost={() => 0}
                onEdit={() => 0}
              />
            )}
          />
          <View style={ProductListStyles.buttonContainer}>
            <Button
              title="Add Product"
              onPress={() => navigate(routes.PRODUCT_ADD)}
            />
          </View>
        </>
      )
    );
  };

  const getGrid = () => {
    return (
      view === "Grid" && (
        <>
          <FlatList
            numColumns={2}
            data={mockProducts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            ListFooterComponent={<View style={ProductListStyles.spacer} />}
            columnWrapperStyle={ProductListStyles.row}
            renderItem={({ item }: { item: Products }) => (
              <ProductCard
                name={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                sold="30"
                currentPrice="300"
                buttonTitle="Boost Now"
                onButtonClick={() => 0}
                discount="30"
                variation={COMMON.VARIATION.ONE}
              />
            )}
          />
          <View style={ProductListStyles.buttonContainer}>
            <Button
              title="Add Product"
              onPress={() => navigate(routes.PRODUCT_ADD)}
            />
          </View>
        </>
      )
    );
  };

  return (
    <View style={ProductListStyles.contentContainer}>
      <>{getListConfig()}</>
      <>{getList()}</>
      <>{getGrid()}</>
    </View>
  );
};

export default MainContent;
