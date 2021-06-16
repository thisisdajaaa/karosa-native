/**
 *
 * Wishlist
 * @format
 *
 */
import React, { FC, Fragment } from "react";
import type { PropsType } from "./types";
import { View, FlatList, StatusBar } from "react-native";
import WishlistStyles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import ProductCard from "@app/components/organisms/ProductCard";
import { COMMON } from "@app/constants";
import { mockProducts } from "./config";
import { Products } from "@app/redux/api-models/product-list";
import Header from "@app/components/molecules/Header";
import { theme } from "@app/styles";

const WishlistTemplate: FC<PropsType> = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          // onPress: navigation.onBack,
        }}
        centerComponent={{ text: "Wishlist" }}
      />
      <ScrollView contentContainerStyle={WishlistStyles.container}>
        <FlatList
          numColumns={2}
          data={mockProducts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          ListFooterComponent={<View style={WishlistStyles.spacer} />}
          columnWrapperStyle={WishlistStyles.row}
          renderItem={({ item }: { item: Products }) => (
            <ProductCard
              name={item.name}
              image="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
              sold="30"
              currentPrice="300"
              buttonTitle="Boost Now"
              onButtonClick={() => 0}
              discount="30"
              variation={COMMON.VARIATION.TWO}
            />
          )}
        />
      </ScrollView>
    </Fragment>
  );
};

export default WishlistTemplate;
