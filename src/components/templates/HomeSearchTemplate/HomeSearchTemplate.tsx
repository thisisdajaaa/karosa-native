/**
 *
 * HomeSearchTemplate
 * @format
 *
 */

import React, { FC, useState } from "react";

// import HomeSearchTemplateConfig from "./config";
import type { PropsType } from "./types";
import styles from "./styles";
import { Screen } from "@app/components/molecules/Base-Screen";
import { FlatList, View } from "react-native";
import ProductCard from "@app/components/organisms/ProductCard";
import { COMMON } from "@app/constants";
import FilterButton from "@app/atoms/FilterButton";
const HomeSearchTemplate: FC<PropsType> = (props) => {
  const { screenProps, productProps } = props;
  const [filterProd, setFilterProd] = useState("all");
  // const [filterCategory, setFilterCategory] = useState(0);
  //const [categoryDiscount, setCategoryDiscount] = useState(0);

  const filteredData = (prod: any[], overAllFilter: any) => {
    let list: any[] = [];

    for (let products of prod) {
      if (overAllFilter == "all") {
        list.push(products);
      }
      if (overAllFilter == "latest") {
        if (products.latestFlag == "1") {
          list.push(products);
        }
      }
    }

    return list;
  };

  return (
    <Screen {...screenProps}>
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
                  filterProd == "all"
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
                  filterProd == "latest"
                    ? styles.filterButtonClicked
                    : styles.filterButtonNeutral
                }
              />
            </View>
            <View style={styles.btnContainer}>
              <FilterButton
                onPress={() => console.log("Testing")}
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
                onPress={() => console.log("Testing")}
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
    </Screen>
  );
};

export default HomeSearchTemplate;
