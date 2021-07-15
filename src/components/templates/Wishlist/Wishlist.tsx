/**
 *
 * Wishlist
 * @format
 *
 */
import React, { FC, Fragment, useCallback, useRef, useState } from "react";

import { FlatList, StatusBar, TouchableOpacity, View } from "react-native";

import { categories, mockProducts } from "./config";
import RBSheet from "react-native-raw-bottom-sheet";
import WishlistHeader from "./Header";
import { WishlistProd } from "@app/redux/api-models/wishlist";
import WishlistStyles from "./styles";
import FilterButton from "@app/atoms/FilterButton";
import ProductCard from "@app/components/organisms/ProductCard";
import { COMMON } from "@app/constants";
import BottomSheet from "@app/components/molecules/BottomSheet";
import Header from "@app/components/molecules/Header";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";
import { WishlistCategories } from "@app/redux/api-models/wishlist-categories";
import Icon from "@app/atoms/Icon";
import { textElipsis } from "@app/screens/Wishlist/config";

const WishlistTemplate: FC = () => {
  const [filterProd, setFilterProd] = useState("all");
  const [filterCategory, setFilterCategory] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const categoriesRef = useRef<RBSheet>(null);
  const statusRef = useRef<RBSheet>(null);
  const discountRef = useRef<RBSheet>(null);

  const filteredData = (
    prod: WishlistProd[],
    overAllFilter: any,
    category: number
  ) => {
    let list: WishlistProd[] = [];

    for (let products of prod) {
      if (overAllFilter == "all") {
        if (category == 0) {
          list.push(products);
        } else if (products.categoryId == category) {
          list.push(products);
        }
      } else if (overAllFilter == "Available") {
        if (products.stocks > 0 && category == 0) {
          list.push(products);
        } else if (products.stocks > 0 && products.categoryId == category) {
          list.push(products);
        }
      } else if (overAllFilter == "Not Available") {
        if (products.stocks <= 0 && category == 0) {
          list.push(products);
        } else if (products.stocks <= 0 && products.categoryId == category) {
          list.push(products);
        }
      }
    }
    return list;
  };

  const setCategory = useCallback((id: number, name: string) => {
    setFilterCategory(id);
    setCategoryName(name);
    categoriesRef.current?.close();
  }, []);

  const showAll = useCallback(() => {
    setFilterProd("all");
    setFilterCategory(0);
    setCategoryName("");
  }, []);

  const showStatus = useCallback(() => {
    statusRef.current?.open();
  }, []);

  const showCategories = useCallback(() => {
    categoriesRef.current?.open();
  }, []);

  const showDiscount = useCallback(() => {
    discountRef.current?.open();
  }, []);

  const setAvailable = useCallback(() => {
    setFilterProd("Available");
    statusRef.current?.close();
  }, []);

  const setUnAvailable = useCallback(() => {
    setFilterProd("Not Available");
    statusRef.current?.close();
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />

      <WishlistHeader products={mockProducts} />
      <FlatList
        numColumns={2}
        data={filteredData(mockProducts, filterProd, filterCategory)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={<View style={WishlistStyles.spacer} />}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={WishlistStyles.btnGrpViewContainer}>
            <View style={WishlistStyles.btnContainer}>
              <FilterButton onPress={showAll} title={"All"} />
            </View>
            <View style={WishlistStyles.btnContainer}>
              <FilterButton
                onPress={showStatus}
                title={
                  filterProd == "all"
                    ? textElipsis(8, "Status")
                    : textElipsis(8, filterProd)
                }
                icon={{
                  name: "chevron-down",
                  type: "font-awesome",
                  size: 10,
                }}
              />
            </View>
            <View style={WishlistStyles.btnContainer}>
              <FilterButton
                onPress={showDiscount}
                title={"Discount"}
                icon={{
                  name: "chevron-down",
                  type: "font-awesome",
                  size: 10,
                }}
              />
            </View>
            <View style={WishlistStyles.btnContainer}>
              <FilterButton
                onPress={showCategories}
                title={
                  categoryName == ""
                    ? textElipsis(8, "Category")
                    : textElipsis(8, categoryName)
                }
                icon={{
                  name: "chevron-down",
                  type: "font-awesome",
                  size: 10,
                }}
              />
            </View>
          </View>
        }
        columnWrapperStyle={WishlistStyles.row}
        renderItem={({ item }: { item: WishlistProd }) => (
          <ProductCard
            name={item.name}
            image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
            sold="30"
            currentPrice={item.dsctdPrice}
            previousPrice={item.orgnlPrice}
            buttonTitle="Boost Now"
            onButtonClick={() => 0}
            discount="30"
            rating={item.rating}
            variation={COMMON.VARIATION.TWO}
          />
        )}
      />
      <BottomSheet ref={statusRef} height={300}>
        <Header
          centerComponent={{
            text: "Status",
            style: WishlistStyles.txtTitle,
          }}
        />
        <ListItem onPress={setAvailable}>
          <ListItem.Content>
            <BaseText>Available</BaseText>
          </ListItem.Content>
        </ListItem>

        <ListItem onPress={setUnAvailable}>
          <ListItem.Content>
            <BaseText>Not Available</BaseText>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>

      <BottomSheet ref={categoriesRef} height={500}>
        <Header
          centerComponent={{
            text: "Categories",
            style: WishlistStyles.txtTitle,
          }}
        />
        <FlatList
          numColumns={3}
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          columnWrapperStyle={WishlistStyles.row}
          renderItem={({ item }: { item: WishlistCategories }) => (
            <TouchableOpacity
              style={WishlistStyles.categoriesCard}
              onPress={() => setCategory(item.id, item.name)}>
              <Icon
                group={"wishlist"}
                name={item.code}
                width={50}
                height={50}
              />
              <BaseText style={WishlistStyles.categoriesText}>
                {item.name}
              </BaseText>
            </TouchableOpacity>
          )}
        />
      </BottomSheet>

      <BottomSheet ref={discountRef} height={500}>
        <Header
          centerComponent={{
            text: "Discount",
            style: WishlistStyles.txtTitle,
          }}
        />
        <FlatList
          numColumns={1}
          data={mockProducts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          // columnWrapperStyle={WishlistStyles.row}
          renderItem={({ item }: { item: WishlistProd }) => (
            <TouchableOpacity style={WishlistStyles.discountCard}>
              <Icon
                group={"wishlist"}
                name={"grayCircle"}
                width={10}
                height={10}
              />
              <BaseText style={WishlistStyles.discountText}>
                {item.discount}
              </BaseText>
            </TouchableOpacity>
          )}
        />
      </BottomSheet>
    </Fragment>
  );
};

export default WishlistTemplate;
