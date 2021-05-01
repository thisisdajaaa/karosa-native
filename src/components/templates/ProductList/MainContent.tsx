/**
 *
 * MainContent
 * @format
 *
 */

import React, { FC, Fragment, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ListItem } from "react-native-elements";
import { AntDesign, Feather } from "@expo/vector-icons";
import { theme } from "@app/styles";
import { Products } from "@app/redux/api-models/product-list";
import ListProduct from "@app/organisms/ListProduct";
import Button from "@app/atoms/Button";
import Text from "@app/atoms/Text";

import ProductListStyles from "./styles";
import { ViewType } from "./types";
import { mockProducts } from "./config";
import ProductCard from "@app/components/organisms/ProductCard";
import { VARIATION } from "src/constants/common";

const MainContent: FC = () => {
  const [view, setView] = useState<ViewType>("List");

  return (
    <View style={ProductListStyles.contentContainer}>
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
            style={ProductListStyles.listView}>
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
            style={ProductListStyles.gridView}>
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

      {view === "List" && (
        <Fragment>
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
                onDiscontinue={() => alert("Discontinue")}
                onBoost={() => alert("boost")}
                onEdit={() => alert("Edit")}
              />
            )}
          />
          <View style={ProductListStyles.buttonContainer}>
            <Button title="Add Product" onPress={() => alert("GG")} />
          </View>
        </Fragment>
      )}

      {view === "Grid" && (
        <Fragment>
          <FlatList
            numColumns={2}
            data={mockProducts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            ListFooterComponent={<View style={ProductListStyles.spacer} />}
            contentContainerStyle={ProductListStyles.row}
            renderItem={({ item }: { item: Products }) => (
              <ProductCard
                name={item.name}
                image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
                sold="30"
                currentPrice="300"
                buttonTitle="Boost Now"
                onButtonClick={() => alert("boost")}
                discount="30"
                variation={VARIATION.ONE}
              />
            )}
          />
          <View style={ProductListStyles.buttonContainer}>
            <Button title="Add Product" onPress={() => alert("GG")} />
          </View>
        </Fragment>
      )}
    </View>
  );
};

export default MainContent;
