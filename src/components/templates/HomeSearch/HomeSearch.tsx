/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * HomeSearchTemplate
 * @format
 *
 */

import React, { FC, useState } from "react";

import type { PropsType } from "./types";
import styles from "./styles";
import { FlatList, Keyboard, TouchableOpacity, View } from "react-native";
import ProductCard from "@app/components/organisms/ProductCard";
import { COMMON } from "@app/constants";
import FilterButton from "@app/atoms/FilterButton";
import Icon from "@app/atoms/Icon";
import Header from "@app/molecules/Header";
import SearchBar from "@app/molecules/SearchBar";

const HomeSearchTemplate: FC<PropsType> = (props) => {
  const { productProps, handleBack } = props;
  const [filterProd, setFilterProd] = useState("all");

  const filteredData = (prod: any[], overAllFilter: any) => {
    const list: any[] = [];

    for (const products of prod) {
      if (overAllFilter === "all") {
        list.push(products);
      }
      if (overAllFilter === "latest") {
        if (products.latestFlag === "1") {
          list.push(products);
        }
      }
    }

    return list;
  };

  return (
    <View>
      <Header
        placement={"left"}
        containerStyle={styles.headerContainer}
        hasBottomDivider
        leftComponent={
          <TouchableOpacity onPress={handleBack}>
            <Icon group={"home"} name={"arrow-back"} width={30} height={30} />
          </TouchableOpacity>
        }
        centerComponent={
          <SearchBar
            placeholder={"Test item"}
            backgroundColor="primary"
            onFocus={Keyboard.dismiss}
          />
        }
        rightComponent={
          <View style={styles.horizontalContainer}>
            <Icon group={"home"} name={"cartGreen"} width={30} height={30} />
            <Icon group={"home"} name={"chatGreen"} width={30} height={30} />
          </View>
        }
      />
      <FlatList
        numColumns={2}
        data={filteredData(productProps, filterProd)}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={<View style={styles.spacer} />}
        columnWrapperStyle={styles.row}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={styles.btnGrpViewContainer}>
            <View style={styles.btnContainer}>
              <FilterButton
                onPress={() => setFilterProd("all")}
                title={"All"}
                buttonStyle={
                  filterProd === "all"
                    ? styles.filterButtonClicked
                    : styles.filterButtonNeutral
                }
              />
            </View>
            <View style={styles.btnContainer}>
              <FilterButton
                onPress={() => [
                  setFilterProd("latest"),
                  filteredData(productProps, filterProd),
                ]}
                title={"Latest"}
                buttonStyle={
                  filterProd === "latest"
                    ? styles.filterButtonClicked
                    : styles.filterButtonNeutral
                }
              />
            </View>
            <View style={styles.btnContainer}>
              <FilterButton
                onPress={() => 0}
                title={"Discount"}
                buttonStyle={styles.filterButtonNeutral}
                icon={{
                  name: "chevron-down",
                  type: "font-awesome",
                  size: 10,
                }}
              />
            </View>
            <View style={styles.btnContainer}>
              <FilterButton
                onPress={() => 0}
                title={"Price"}
                buttonStyle={styles.filterButtonNeutral}
                icon={{
                  name: "chevron-down",
                  type: "font-awesome",
                  size: 10,
                }}
              />
            </View>
          </View>
        }
        renderItem={({ item }: { item: any }) => (
          <ProductCard
            name={item.name}
            image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
            sold={item.stocks}
            currentPrice={item.orgnlPrice}
            previousPrice={item.dsctdPrice}
            discount={item.discount}
            rating={item.rating}
            variation={COMMON.VARIATION.TWO}
          />
        )}
      />
    </View>
  );
};

export default HomeSearchTemplate;
