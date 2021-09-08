/**
 *
 * Wishlist
 * @format
 *
 */
import React, { FC, Fragment, useCallback, useRef, useState } from "react";

import { FlatList, StatusBar, TouchableOpacity, View } from "react-native";

import { categories, mockProducts, discounts } from "./config";
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
import { WishlistDiscount } from "@app/redux/api-models/wishlist-discount";

const WishlistTemplate: FC = () => {
  const [filterProd, setFilterProd] = useState("all");
  const [filterCategory, setFilterCategory] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDiscount, setCategoryDiscount] = useState(0);
  const categoriesRef = useRef<RBSheet>(null);
  const statusRef = useRef<RBSheet>(null);
  const discountRef = useRef<RBSheet>(null);

  const filteredData = (
    prod: WishlistProd[],
    overAllFilter: any,
    category: number,
    discount: number
  ) => {
    let list: WishlistProd[] = [];

    for (let products of prod) {
      if (overAllFilter == "all") {
        if (category == 0) {
          if (discount == 0) {
            list.push(products);
          } else if (products.discount == discount) {
            list.push(products);
          }
        } else if (products.categoryId == category) {
          if (discount == 0) {
            list.push(products);
          } else if (products.discount == discount) {
            list.push(products);
          }
        }
      } else if (overAllFilter == "Available") {
        if (products.stocks > 0 && category == 0) {
          if (discount == 0) {
            list.push(products);
          } else if (products.discount == discount) {
            list.push(products);
          }
        } else if (products.stocks > 0 && products.categoryId == category) {
          if (discount == 0) {
            list.push(products);
          } else if (products.discount == discount) {
            list.push(products);
          }
        }
      } else if (overAllFilter == "Not Available") {
        if (products.stocks <= 0 && category == 0) {
          if (discount == 0) {
            list.push(products);
          } else if (products.discount == discount) {
            list.push(products);
          }
        } else if (products.stocks <= 0 && products.categoryId == category) {
          if (discount == 0) {
            list.push(products);
          } else if (products.discount == discount) {
            list.push(products);
          }
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

  const setDiscount = useCallback((id: number) => {
    setCategoryDiscount(id);
    discountRef.current?.close();
  }, []);

  const showAll = useCallback(() => {
    setFilterProd("all");
    setFilterCategory(0);
    setCategoryName("");
    setCategoryDiscount(0);
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
        data={filteredData(
          mockProducts,
          filterProd,
          filterCategory,
          categoryDiscount
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={<View style={WishlistStyles.spacer} />}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={WishlistStyles.btnGrpViewContainer}>
            <View style={WishlistStyles.btnContainer}>
              <FilterButton
                onPress={showAll}
                title={"All"}
                buttonStyle={
                  filterProd == "all"
                    ? WishlistStyles.filterButtonClicked
                    : WishlistStyles.filterButtonNeutral
                }
              />
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
                buttonStyle={
                  filterProd == "Available" || filterProd == "Not Available"
                    ? WishlistStyles.filterButtonClicked
                    : WishlistStyles.filterButtonNeutral
                }
              />
            </View>
            <View style={WishlistStyles.btnContainer}>
              <FilterButton
                onPress={showDiscount}
                title={
                  categoryDiscount <= 0 ? "Discount" : categoryDiscount + "%"
                }
                icon={{
                  name: "chevron-down",
                  type: "font-awesome",
                  size: 10,
                }}
                buttonStyle={
                  categoryDiscount > 0
                    ? WishlistStyles.filterButtonClicked
                    : WishlistStyles.filterButtonNeutral
                }
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
                buttonStyle={
                  categoryName != ""
                    ? WishlistStyles.filterButtonClicked
                    : WishlistStyles.filterButtonNeutral
                }
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
            discount={item.discount.toString()}
            rating={item.rating}
            variation={COMMON.VARIATION.THREE}
            heartFlag={item.heartFlag}
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
          <Icon
            group={"wishlist"}
            name={filterProd != "Available" ? "grayCircle" : "greenCircle"}
            width={15}
            height={15}
          />
          <ListItem.Content>
            <BaseText>Available</BaseText>
          </ListItem.Content>
        </ListItem>

        <ListItem onPress={setUnAvailable}>
          <Icon
            group={"wishlist"}
            name={filterProd != "Not Available" ? "grayCircle" : "greenCircle"}
            width={15}
            height={15}
          />
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

      <BottomSheet ref={discountRef} height={350}>
        <Header
          centerComponent={{
            text: "Discount",
            style: WishlistStyles.txtTitle,
          }}
        />
        <FlatList
          numColumns={1}
          data={discounts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }: { item: WishlistDiscount }) => (
            <TouchableOpacity
              style={WishlistStyles.discountCard}
              onPress={() => setDiscount(item.id)}>
              <BaseText
                style={
                  categoryDiscount != item.id
                    ? WishlistStyles.discountTextNeutral
                    : WishlistStyles.discountTextActive
                }>
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
