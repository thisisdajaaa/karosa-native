/**
 *
 * HomeSearchTemplate
 * @format
 *
 */

import React, { FC } from "react";

// import HomeSearchTemplateConfig from "./config";
import type { PropsType } from "./types";
import styles from "./styles";
import { Screen } from "@app/components/molecules/Base-Screen";
import { FlatList, View } from "react-native";
import ProductCard from "@app/components/organisms/ProductCard";
import { COMMON } from "@app/constants";
const HomeSearchTemplate: FC<PropsType> = (props) => {
  const { screenProps, productProps } = props;

  return (
    <Screen {...screenProps}>
      <FlatList
        numColumns={2}
        data={productProps}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={<View style={styles.spacer} />}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={styles.btnGrpViewContainer}>
            <View style={styles.btnContainer}>
              {/* <FilterButton
                // onPress={showAll}
                title={"All"}
                // buttonStyle={

                // }
              /> */}
            </View>
          </View>
        }
        renderItem={({ item }: { item: any }) => (
          <ProductCard
            name={item.name}
            image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
            sold="30"
            currentPrice={"50"}
            previousPrice={"100"}
            buttonTitle="Boost Now"
            onButtonClick={() => 0}
            discount={"20"}
            rating={item.rating}
            variation={COMMON.VARIATION.THREE}
          />
        )}
      />
    </Screen>
  );
};

export default HomeSearchTemplate;
